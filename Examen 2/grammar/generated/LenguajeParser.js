// Generated from f:/Usuario/OneDrive/Documentos/Facultad/Sintaxis/antlr/Proyecto Analizador/Examen 2/grammar/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,15,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
5,2,27,8,2,10,2,12,2,30,9,2,1,2,1,2,1,3,4,3,35,8,3,11,3,12,3,36,1,3,3,3,
40,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,46,0,11,1,0,0,0,2,
15,1,0,0,0,4,17,1,0,0,0,6,39,1,0,0,0,8,41,1,0,0,0,10,12,3,2,1,0,11,10,1,
0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,16,3,4,2,
0,16,3,1,0,0,0,17,18,5,2,0,0,18,19,5,12,0,0,19,20,5,3,0,0,20,21,5,13,0,0,
21,22,5,4,0,0,22,23,5,13,0,0,23,24,5,5,0,0,24,28,5,10,0,0,25,27,3,6,3,0,
26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,30,
28,1,0,0,0,31,32,5,11,0,0,32,5,1,0,0,0,33,35,3,8,4,0,34,33,1,0,0,0,35,36,
1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,40,1,0,0,0,38,40,5,7,0,0,39,34,1,
0,0,0,39,38,1,0,0,0,40,7,1,0,0,0,41,42,5,6,0,0,42,43,5,8,0,0,43,44,5,14,
0,0,44,45,5,9,0,0,45,46,5,1,0,0,46,9,1,0,0,0,4,13,28,36,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "';'", "'para'", "'desde'", "'hasta'", 
                            "'hacer'", "'imprimir'", null, "'('", "')'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, "PARA", "DESDE", "HASTA", "HACER", 
                             "IMPRIMIR", "TERMINAR", "PAR_A", "PAR_C", "LLAVE_A", 
                             "LLAVE_C", "IDENTIFICADOR", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "conteo", "sentencia", 
                         "salida" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.instruccion();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.conteo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conteo() {
	    let localctx = new ConteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_conteo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(LenguajeParser.PARA);
	        this.state = 18;
	        this.match(LenguajeParser.IDENTIFICADOR);
	        this.state = 19;
	        this.match(LenguajeParser.DESDE);
	        this.state = 20;
	        this.match(LenguajeParser.NUMERO);
	        this.state = 21;
	        this.match(LenguajeParser.HASTA);
	        this.state = 22;
	        this.match(LenguajeParser.NUMERO);
	        this.state = 23;
	        this.match(LenguajeParser.HACER);
	        this.state = 24;
	        this.match(LenguajeParser.LLAVE_A);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 25;
	            this.sentencia();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
	        this.match(LenguajeParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_sentencia);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 33;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 36; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.match(LenguajeParser.TERMINAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(LenguajeParser.IMPRIMIR);
	        this.state = 42;
	        this.match(LenguajeParser.PAR_A);
	        this.state = 43;
	        this.match(LenguajeParser.CADENA);
	        this.state = 44;
	        this.match(LenguajeParser.PAR_C);
	        this.state = 45;
	        this.match(LenguajeParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.PARA = 2;
LenguajeParser.DESDE = 3;
LenguajeParser.HASTA = 4;
LenguajeParser.HACER = 5;
LenguajeParser.IMPRIMIR = 6;
LenguajeParser.TERMINAR = 7;
LenguajeParser.PAR_A = 8;
LenguajeParser.PAR_C = 9;
LenguajeParser.LLAVE_A = 10;
LenguajeParser.LLAVE_C = 11;
LenguajeParser.IDENTIFICADOR = 12;
LenguajeParser.NUMERO = 13;
LenguajeParser.CADENA = 14;
LenguajeParser.WS = 15;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instruccion = 1;
LenguajeParser.RULE_conteo = 2;
LenguajeParser.RULE_sentencia = 3;
LenguajeParser.RULE_salida = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	conteo() {
	    return this.getTypedRuleContext(ConteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_conteo;
    }

	PARA() {
	    return this.getToken(LenguajeParser.PARA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	DESDE() {
	    return this.getToken(LenguajeParser.DESDE, 0);
	};

	NUMERO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.NUMERO);
	    } else {
	        return this.getToken(LenguajeParser.NUMERO, i);
	    }
	};


	HASTA() {
	    return this.getToken(LenguajeParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(LenguajeParser.HACER, 0);
	};

	LLAVE_A() {
	    return this.getToken(LenguajeParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(LenguajeParser.LLAVE_C, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterConteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitConteo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitConteo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	TERMINAR() {
	    return this.getToken(LenguajeParser.TERMINAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeParser.IMPRIMIR, 0);
	};

	PAR_A() {
	    return this.getToken(LenguajeParser.PAR_A, 0);
	};

	CADENA() {
	    return this.getToken(LenguajeParser.CADENA, 0);
	};

	PAR_C() {
	    return this.getToken(LenguajeParser.PAR_C, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.ConteoContext = ConteoContext; 
LenguajeParser.SentenciaContext = SentenciaContext; 
LenguajeParser.SalidaContext = SalidaContext; 
