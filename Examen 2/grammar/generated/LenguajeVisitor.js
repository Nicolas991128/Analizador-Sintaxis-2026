// Generated from f:/Usuario/OneDrive/Documentos/Facultad/Sintaxis/antlr/Proyecto Analizador/Examen 2/grammar/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LenguajeParser.

export default class LenguajeVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LenguajeParser#programa.
	visitPrograma(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LenguajeParser#instruccion.
	visitInstruccion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LenguajeParser#conteo.
	visitConteo(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LenguajeParser#sentencia.
	visitSentencia(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LenguajeParser#salida.
	visitSalida(ctx) {
	  return this.visitChildren(ctx);
	}



}