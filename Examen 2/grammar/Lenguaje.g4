grammar Lenguaje;

// --- REGLAS DE PARSER ---
programa : instruccion+ ;

instruccion : conteo ; 

conteo : PARA IDENTIFICADOR DESDE NUMERO HASTA NUMERO HACER LLAVE_A sentencia* LLAVE_C ;

sentencia : salida+ 
          | TERMINAR;

salida : IMPRIMIR PAR_A CADENA PAR_C ';' ;

// --- REGLAS DE LEXER (Lemas) ---

// Palabras reservadas
PARA     : 'para' ;
DESDE    : 'desde' ;
HASTA    : 'hasta' ;
HACER    : 'hacer' ;
IMPRIMIR : 'imprimir' ;
TERMINAR : 'salir' ';' ;

// Símbolos
PAR_A    : '(' ;
PAR_C    : ')' ;
LLAVE_A  : '{' ;
LLAVE_C  : '}' ;

// Definiciones con rangos directos 
IDENTIFICADOR   : [a-zA-Z]+ ;
NUMERO          : [0-9]+ ;
CADENA          : '"' [a-zA-Z0-9.,!?:; ]* '"' ;

// Manejo de espacios 
WS       : [ \t\r\n]+ -> skip ;