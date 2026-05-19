import antlr4 from 'antlr4';
import fs from 'fs';
import LenguajeLexer from './grammar/generated/LenguajeLexer.js';
import LenguajeParser from './grammar/generated/LenguajeParser.js';
import LenguajeVisitor from './grammar/generated/LenguajeVisitor.js';



// --- INTERCEPTOR DE ERRORES ---
class InterceptorErrores extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.tieneErrores = false;
        this.reporteErrores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.tieneErrores = true;
        this.reporteErrores.push(`❌ Error en línea ${line}:${column} - Causa: ${msg}`);
    }
}

// --- VISITOR PARA EJECUTAR LAS INSTRUCCIONES DE IMPRESIÓN ---
// --- TRADUCTOR DE ÁRBOL SINTÁCTICO A JAVASCRIPT ---
// --- TRADUCTOR OFICIAL PARA LA GRAMÁTICA DE LA CONSIGNA ---
class TraductorLenguaje extends LenguajeVisitor {
    
    // 1. programa : instruccion+ ;
    visitPrograma(ctx) {
        const instrucciones = ctx.instruccion ? ctx.instruccion() : [];
        const listaInstrucciones = Array.isArray(instrucciones) ? instrucciones : [instrucciones];
        
        return listaInstrucciones
            .map(ins => this.visit(ins))
            .filter(res => res !== null && res !== undefined && res !== "")
            .join("\n");
    }

    // 2. instruccion : conteo ;
    visitInstruccion(ctx) {
        if (ctx.conteo()) {
            return this.visit(ctx.conteo());
        }
        return "";
    }

    // 3. conteo : PARA IDENTIFICADOR DESDE NUMERO HASTA NUMERO HACER LLAVE_A sentencia* LLAVE_C ;
    visitConteo(ctx) {
        const variable = ctx.IDENTIFICADOR().getText();       
        const inicio = ctx.NUMERO(0).getText();     
        const fin = ctx.NUMERO(1).getText();        
        
        const sentencias = ctx.sentencia ? ctx.sentencia() : [];
        const listaSentencias = Array.isArray(sentencias) ? sentencias : [sentencias];
        
        // Mapea las sentencias hijas y las une con saltos de línea
        const cuerpo = listaSentencias
            .map(s => this.visit(s))
            .filter(res => res !== null && res !== undefined && res !== "")
            .join("\n  "); // Indenta cada sentencia dentro del bloque

        return `for (let ${variable} = ${inicio}; ${variable} <= ${fin}; ${variable}++) {\n  ${cuerpo}\n}`;
    }

    // 4. sentencia : salida+ | TERMINAR ;
    visitSentencia(ctx) {
        // Maneja el operador '+' de salida generando líneas independientes
        if (ctx.salida && ctx.salida().length > 0) {
            const salidas = ctx.salida();
            const listaSalidas = Array.isArray(salidas) ? salidas : [salidas];
            
            return listaSalidas
                .map(s => this.visit(s))
                .filter(res => res !== null && res !== undefined)
                .join("\n  "); // Evita que JS ponga comas por defecto al transformar el array
        }
        
        if (ctx.TERMINAR && ctx.TERMINAR()) {
            return "break;";
        }
        
        return "";
    }

    // 5. salida : IMPRIMIR PAR_A CADENA PAR_C ';' ;
    visitSalida(ctx) {
        return `console.log(${ctx.CADENA().getText()});`;
    }
}

try {
    const input = fs.readFileSync('input.txt', 'utf8');

    const chars = new antlr4.InputStream(input);
    const lexer = new LenguajeLexer(chars);
    
    const escuchador = new InterceptorErrores();
    lexer.removeErrorListeners();
    lexer.addErrorListener(escuchador);

    const tokens = new antlr4.CommonTokenStream(lexer);

    // 2. CONFIGURACIÓN DEL PARSER (Lo creamos antes para usar su vocabulario de respaldo)
    const parser = new LenguajeParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(escuchador);

    // =========================================================================
    // 2. TABLA DE LEXEMAS-TOKENS 
    // =========================================================================
    console.log("=== TABLA DE LEXEMAS Y TOKENS RECONOCIDOS ===");
    
    let index = 0;
    while (true) {
        const token = tokens.LT(index + 1);
        
        // Si no hay más tokens o es el Fin de Archivo (EOF), salimos del bucle
        if (!token || token.type === antlr4.Token.EOF || token.type === -1) {
            break; 
        }

        // Acceso directo a los arrays estáticos generados por ANTLR 4.13.2
        let nombreToken = "DESCONOCIDO";
        if (LenguajeParser.symbolicNames && LenguajeParser.symbolicNames[token.type]) {
            nombreToken = LenguajeParser.symbolicNames[token.type];
        } else if (LenguajeParser.literalNames && LenguajeParser.literalNames[token.type]) {
            nombreToken = LenguajeParser.literalNames[token.type];
        }

        // Imprime el token formateado correctamente
        console.log(`[Línea ${token.line}:${token.column}] Tipo: ${nombreToken.padEnd(15)} -> Lexema: "${token.text}"`);
        index++;
    }
    console.log("=====================================================\n");
    // =========================================================================

    // Construimos el árbol sintáctico ejecutanado la regla inicial
    const tree = parser.programa();

    

    // =========================================================================
    // CONTROL DE SALIDA: EVALUAR O MOSTRAR ERRORES
    // =========================================================================
    if (!escuchador.tieneErrores) {
        // =========================================================================
        // ÁRBOL DE ANÁLISIS SINTÁCTICO FORMATEADO (CORREGIDO PARA ANTLR 4.13.2)
        // =========================================================================
        console.log("=== ÁRBOL DE ANÁLISIS SINTÁCTICO ===");
        
        function formatearArbol(nodo, parser, indentacion = "") {
            // Si el nodo no tiene hijos, es un token terminal (texto puro)
            if (!nodo.getChildCount || nodo.getChildCount() === 0) {
                return nodo.getText();
            }

            // Corrección: Acceso directo a la propiedad .ruleIndex sin paréntesis
            const nombreRegla = parser.ruleNames[nodo.ruleIndex];
            let resultado = `(${nombreRegla}\n`;
            
            for (let i = 0; i < nodo.getChildCount(); i++) {
                const hijo = nodo.getChild(i);
                const contenidoHijo = formatearArbol(hijo, parser, indentacion + "  ");
                
                // Si el hijo tiene la propiedad ruleIndex, es una regla sintáctica interna
                if (hijo.ruleIndex !== undefined) {
                    resultado += `${indentacion}  ${contenidoHijo}\n`;
                } else {
                    // Si es un token terminal suelto (para, i, desde, {, }, etc.)
                    resultado += `${indentacion}  ${contenidoHijo}\n`;
                }
            }
            
            resultado += `${indentacion})`;
            return resultado;
        }

        // Ejecutamos el formateador sobre el nodo raíz
        console.log(formatearArbol(tree, parser));
        console.log("====================================\n");

        console.log("=== 1. COMPILANDO Y TRADUCIENDO TU LENGUAJE ===");
        // Instanciamos el traductor y le pasamos el árbol de ANTLR
        const traductor = new TraductorLenguaje();
        const codigoJS = traductor.visit(tree); 
        
        // Muestra en consola qué código generó tras bambalinas
        console.log(codigoJS);
        console.log("================================================\n");

        console.log("=== 2. MOTOR DE EJECUCIÓN (NODE.JS) ===");
        // El motor de Node ejecuta el código nativo generado
        eval(codigoJS); 
        console.log("========================================");
        
        console.log("\n✅ El análisis léxico y sintáctico fue correcto. La entrada es válida.");
    } else {
        console.log("⚠️ Se detectaron problemas en la estructura sintáctica:");
        escuchador.reporteErrores.forEach(err => console.error(err));
    }

} catch (error) {
    console.error("Error crítico al procesar el archivo:", error.message);
}