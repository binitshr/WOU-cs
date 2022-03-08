// Generated from Http.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HttpListener = require('./HttpListener').HttpListener;
var grammarFileName = "Http.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0012^\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001f",
    "\n\u0002\f\u0002\u000e\u0002\"\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003(\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006;\n\u0006\f\u0006\u000e\u0006",
    ">\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006B\n\u0006\f\u0006\u000e",
    "\u0006E\u000b\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0005\rU\n\r\u0003\r\u0005\rX\n\r\u0006\rZ\n\r\r\r\u000e",
    "\r[\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0004\u0003\u0002\u0004\f\u0004\u0002\r\r\u000f",
    "\u0010\u0002X\u0002\u001a\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002",
    "\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002",
    "\n7\u0003\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000eH\u0003",
    "\u0002\u0002\u0002\u0010J\u0003\u0002\u0002\u0002\u0012L\u0003\u0002",
    "\u0002\u0002\u0014N\u0003\u0002\u0002\u0002\u0016P\u0003\u0002\u0002",
    "\u0002\u0018Y\u0003\u0002\u0002\u0002\u001a \u0005\u0004\u0003\u0002",
    "\u001b\u001c\u0005\n\u0006\u0002\u001c\u001d\u0007\u0012\u0002\u0002",
    "\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002",
    "\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003",
    "\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "#$\u0007\u0012\u0002\u0002$\u0003\u0003\u0002\u0002\u0002%(\u0005\u0006",
    "\u0004\u0002&(\u0005\b\u0005\u0002\'%\u0003\u0002\u0002\u0002\'&\u0003",
    "\u0002\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)*\u0005\f\u0007\u0002",
    "*+\u0007\u0011\u0002\u0002+,\u0005\u000e\b\u0002,-\u0007\u0011\u0002",
    "\u0002-.\u0005\u0010\t\u0002./\u0007\u0012\u0002\u0002/\u0007\u0003",
    "\u0002\u0002\u000201\u0005\u0010\t\u000212\u0007\u0011\u0002\u00022",
    "3\u0005\u0012\n\u000234\u0007\u0011\u0002\u000245\u0005\u0014\u000b",
    "\u000256\u0007\u0012\u0002\u00026\t\u0003\u0002\u0002\u000278\u0005",
    "\u0016\f\u00028<\u0007\u0003\u0002\u00029;\u0007\u0011\u0002\u0002:",
    "9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002?C\u0005\u0018\r\u0002@B\u0007\u0011\u0002\u0002A@\u0003",
    "\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002D\u000b\u0003\u0002\u0002\u0002EC\u0003\u0002",
    "\u0002\u0002FG\t\u0002\u0002\u0002G\r\u0003\u0002\u0002\u0002HI\u0007",
    "\u0010\u0002\u0002I\u000f\u0003\u0002\u0002\u0002JK\u0007\u000e\u0002",
    "\u0002K\u0011\u0003\u0002\u0002\u0002LM\u0007\r\u0002\u0002M\u0013\u0003",
    "\u0002\u0002\u0002NO\u0007\u000f\u0002\u0002O\u0015\u0003\u0002\u0002",
    "\u0002PQ\u0007\u000f\u0002\u0002Q\u0017\u0003\u0002\u0002\u0002RT\t",
    "\u0003\u0002\u0002SU\u0007\u0011\u0002\u0002TS\u0003\u0002\u0002\u0002",
    "TU\u0003\u0002\u0002\u0002UW\u0003\u0002\u0002\u0002VX\u0007\u0003\u0002",
    "\u0002WV\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002",
    "\u0002\u0002YR\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[Y\u0003",
    "\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\\u0019\u0003\u0002\u0002",
    "\u0002\t \'<CTW["].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'GET'", "'HEAD'", "'POST'", "'PUT'", 
                     "'PATCH'", "'DELETE'", "'CONNECT'", "'OPTIONS'", "'TRACE'", 
                     null, null, null, null, "' '" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "INT", "HTTP_VERSION", "TOKEN", "TEXT", 
                      "SP", "CRLF" ];

var ruleNames =  [ "message", "start_line", "request_line", "status_line", 
                   "header_field", "method", "request_target", "http_version", 
                   "status_code", "reason_phrase", "field_name", "field_value" ];

function HttpParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HttpParser.prototype = Object.create(antlr4.Parser.prototype);
HttpParser.prototype.constructor = HttpParser;

Object.defineProperty(HttpParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HttpParser.EOF = antlr4.Token.EOF;
HttpParser.T__0 = 1;
HttpParser.T__1 = 2;
HttpParser.T__2 = 3;
HttpParser.T__3 = 4;
HttpParser.T__4 = 5;
HttpParser.T__5 = 6;
HttpParser.T__6 = 7;
HttpParser.T__7 = 8;
HttpParser.T__8 = 9;
HttpParser.T__9 = 10;
HttpParser.INT = 11;
HttpParser.HTTP_VERSION = 12;
HttpParser.TOKEN = 13;
HttpParser.TEXT = 14;
HttpParser.SP = 15;
HttpParser.CRLF = 16;

HttpParser.RULE_message = 0;
HttpParser.RULE_start_line = 1;
HttpParser.RULE_request_line = 2;
HttpParser.RULE_status_line = 3;
HttpParser.RULE_header_field = 4;
HttpParser.RULE_method = 5;
HttpParser.RULE_request_target = 6;
HttpParser.RULE_http_version = 7;
HttpParser.RULE_status_code = 8;
HttpParser.RULE_reason_phrase = 9;
HttpParser.RULE_field_name = 10;
HttpParser.RULE_field_value = 11;


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.start_line = function() {
    return this.getTypedRuleContext(Start_lineContext,0);
};

MessageContext.prototype.CRLF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.CRLF);
    } else {
        return this.getToken(HttpParser.CRLF, i);
    }
};


MessageContext.prototype.header_field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Header_fieldContext);
    } else {
        return this.getTypedRuleContext(Header_fieldContext,i);
    }
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitMessage(this);
	}
};




HttpParser.MessageContext = MessageContext;

HttpParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HttpParser.RULE_message);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.start_line();
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HttpParser.TOKEN) {
            this.state = 25;
            this.header_field();
            this.state = 26;
            this.match(HttpParser.CRLF);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(HttpParser.CRLF);
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
};


function Start_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_start_line;
    return this;
}

Start_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Start_lineContext.prototype.constructor = Start_lineContext;

Start_lineContext.prototype.request_line = function() {
    return this.getTypedRuleContext(Request_lineContext,0);
};

Start_lineContext.prototype.status_line = function() {
    return this.getTypedRuleContext(Status_lineContext,0);
};

Start_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterStart_line(this);
	}
};

Start_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitStart_line(this);
	}
};




HttpParser.Start_lineContext = Start_lineContext;

HttpParser.prototype.start_line = function() {

    var localctx = new Start_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HttpParser.RULE_start_line);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HttpParser.T__1:
        case HttpParser.T__2:
        case HttpParser.T__3:
        case HttpParser.T__4:
        case HttpParser.T__5:
        case HttpParser.T__6:
        case HttpParser.T__7:
        case HttpParser.T__8:
        case HttpParser.T__9:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.request_line();
            break;
        case HttpParser.HTTP_VERSION:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.status_line();
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
};


function Request_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_request_line;
    return this;
}

Request_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Request_lineContext.prototype.constructor = Request_lineContext;

Request_lineContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};

Request_lineContext.prototype.SP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.SP);
    } else {
        return this.getToken(HttpParser.SP, i);
    }
};


Request_lineContext.prototype.request_target = function() {
    return this.getTypedRuleContext(Request_targetContext,0);
};

Request_lineContext.prototype.http_version = function() {
    return this.getTypedRuleContext(Http_versionContext,0);
};

Request_lineContext.prototype.CRLF = function() {
    return this.getToken(HttpParser.CRLF, 0);
};

Request_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterRequest_line(this);
	}
};

Request_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitRequest_line(this);
	}
};




HttpParser.Request_lineContext = Request_lineContext;

HttpParser.prototype.request_line = function() {

    var localctx = new Request_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, HttpParser.RULE_request_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.method();
        this.state = 40;
        this.match(HttpParser.SP);
        this.state = 41;
        this.request_target();
        this.state = 42;
        this.match(HttpParser.SP);
        this.state = 43;
        this.http_version();
        this.state = 44;
        this.match(HttpParser.CRLF);
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
};


function Status_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_status_line;
    return this;
}

Status_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Status_lineContext.prototype.constructor = Status_lineContext;

Status_lineContext.prototype.http_version = function() {
    return this.getTypedRuleContext(Http_versionContext,0);
};

Status_lineContext.prototype.SP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.SP);
    } else {
        return this.getToken(HttpParser.SP, i);
    }
};


Status_lineContext.prototype.status_code = function() {
    return this.getTypedRuleContext(Status_codeContext,0);
};

Status_lineContext.prototype.reason_phrase = function() {
    return this.getTypedRuleContext(Reason_phraseContext,0);
};

Status_lineContext.prototype.CRLF = function() {
    return this.getToken(HttpParser.CRLF, 0);
};

Status_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterStatus_line(this);
	}
};

Status_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitStatus_line(this);
	}
};




HttpParser.Status_lineContext = Status_lineContext;

HttpParser.prototype.status_line = function() {

    var localctx = new Status_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, HttpParser.RULE_status_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.http_version();
        this.state = 47;
        this.match(HttpParser.SP);
        this.state = 48;
        this.status_code();
        this.state = 49;
        this.match(HttpParser.SP);
        this.state = 50;
        this.reason_phrase();
        this.state = 51;
        this.match(HttpParser.CRLF);
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
};


function Header_fieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_header_field;
    return this;
}

Header_fieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_fieldContext.prototype.constructor = Header_fieldContext;

Header_fieldContext.prototype.field_name = function() {
    return this.getTypedRuleContext(Field_nameContext,0);
};

Header_fieldContext.prototype.field_value = function() {
    return this.getTypedRuleContext(Field_valueContext,0);
};

Header_fieldContext.prototype.SP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.SP);
    } else {
        return this.getToken(HttpParser.SP, i);
    }
};


Header_fieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterHeader_field(this);
	}
};

Header_fieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitHeader_field(this);
	}
};




HttpParser.Header_fieldContext = Header_fieldContext;

HttpParser.prototype.header_field = function() {

    var localctx = new Header_fieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, HttpParser.RULE_header_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.field_name();
        this.state = 54;
        this.match(HttpParser.T__0);
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HttpParser.SP) {
            this.state = 55;
            this.match(HttpParser.SP);
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.field_value();
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HttpParser.SP) {
            this.state = 62;
            this.match(HttpParser.SP);
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;


MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitMethod(this);
	}
};




HttpParser.MethodContext = MethodContext;

HttpParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, HttpParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HttpParser.T__1) | (1 << HttpParser.T__2) | (1 << HttpParser.T__3) | (1 << HttpParser.T__4) | (1 << HttpParser.T__5) | (1 << HttpParser.T__6) | (1 << HttpParser.T__7) | (1 << HttpParser.T__8) | (1 << HttpParser.T__9))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function Request_targetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_request_target;
    return this;
}

Request_targetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Request_targetContext.prototype.constructor = Request_targetContext;

Request_targetContext.prototype.TEXT = function() {
    return this.getToken(HttpParser.TEXT, 0);
};

Request_targetContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterRequest_target(this);
	}
};

Request_targetContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitRequest_target(this);
	}
};




HttpParser.Request_targetContext = Request_targetContext;

HttpParser.prototype.request_target = function() {

    var localctx = new Request_targetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, HttpParser.RULE_request_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(HttpParser.TEXT);
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
};


function Http_versionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_http_version;
    return this;
}

Http_versionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Http_versionContext.prototype.constructor = Http_versionContext;

Http_versionContext.prototype.HTTP_VERSION = function() {
    return this.getToken(HttpParser.HTTP_VERSION, 0);
};

Http_versionContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterHttp_version(this);
	}
};

Http_versionContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitHttp_version(this);
	}
};




HttpParser.Http_versionContext = Http_versionContext;

HttpParser.prototype.http_version = function() {

    var localctx = new Http_versionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, HttpParser.RULE_http_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(HttpParser.HTTP_VERSION);
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
};


function Status_codeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_status_code;
    return this;
}

Status_codeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Status_codeContext.prototype.constructor = Status_codeContext;

Status_codeContext.prototype.INT = function() {
    return this.getToken(HttpParser.INT, 0);
};

Status_codeContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterStatus_code(this);
	}
};

Status_codeContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitStatus_code(this);
	}
};




HttpParser.Status_codeContext = Status_codeContext;

HttpParser.prototype.status_code = function() {

    var localctx = new Status_codeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, HttpParser.RULE_status_code);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(HttpParser.INT);
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
};


function Reason_phraseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_reason_phrase;
    return this;
}

Reason_phraseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reason_phraseContext.prototype.constructor = Reason_phraseContext;

Reason_phraseContext.prototype.TOKEN = function() {
    return this.getToken(HttpParser.TOKEN, 0);
};

Reason_phraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterReason_phrase(this);
	}
};

Reason_phraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitReason_phrase(this);
	}
};




HttpParser.Reason_phraseContext = Reason_phraseContext;

HttpParser.prototype.reason_phrase = function() {

    var localctx = new Reason_phraseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, HttpParser.RULE_reason_phrase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(HttpParser.TOKEN);
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
};


function Field_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_field_name;
    return this;
}

Field_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_nameContext.prototype.constructor = Field_nameContext;

Field_nameContext.prototype.TOKEN = function() {
    return this.getToken(HttpParser.TOKEN, 0);
};

Field_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterField_name(this);
	}
};

Field_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitField_name(this);
	}
};




HttpParser.Field_nameContext = Field_nameContext;

HttpParser.prototype.field_name = function() {

    var localctx = new Field_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, HttpParser.RULE_field_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(HttpParser.TOKEN);
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
};


function Field_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HttpParser.RULE_field_value;
    return this;
}

Field_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_valueContext.prototype.constructor = Field_valueContext;

Field_valueContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.TEXT);
    } else {
        return this.getToken(HttpParser.TEXT, i);
    }
};


Field_valueContext.prototype.TOKEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.TOKEN);
    } else {
        return this.getToken(HttpParser.TOKEN, i);
    }
};


Field_valueContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.INT);
    } else {
        return this.getToken(HttpParser.INT, i);
    }
};


Field_valueContext.prototype.SP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HttpParser.SP);
    } else {
        return this.getToken(HttpParser.SP, i);
    }
};


Field_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.enterField_value(this);
	}
};

Field_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof HttpListener ) {
        listener.exitField_value(this);
	}
};




HttpParser.Field_valueContext = Field_valueContext;

HttpParser.prototype.field_value = function() {

    var localctx = new Field_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, HttpParser.RULE_field_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 80;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HttpParser.INT) | (1 << HttpParser.TOKEN) | (1 << HttpParser.TEXT))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 82;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 81;
                this.match(HttpParser.SP);

            }
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===HttpParser.T__0) {
                this.state = 84;
                this.match(HttpParser.T__0);
            }

            this.state = 89; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HttpParser.INT) | (1 << HttpParser.TOKEN) | (1 << HttpParser.TEXT))) !== 0));
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
};


exports.HttpParser = HttpParser;
