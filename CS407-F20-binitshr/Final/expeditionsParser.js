// Generated from expeditions.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var expeditionsListener = require('./expeditionsListener').expeditionsListener;
var expeditionsVisitor = require('./expeditionsVisitor').expeditionsVisitor;

var grammarFileName = "expeditions.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019\u00c5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0006\u00023\n\u0002\r",
    "\u0002\u000e\u00024\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005",
    "\b\u0083\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u008f\n\r\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u0093\n\u000e\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u0097\n\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u009b\n\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u009f\n\u0011\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00a3\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00a9\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00ae\n\u0015\u0003\u0016\u0005\u0016\u00b1\n\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00b6\n\u0016\u0007\u0016",
    "\u00b8\n\u0016\f\u0016\u000e\u0016\u00bb\u000b\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00bf\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0002\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0002",
    "\u0002\u00bd\u00020\u0003\u0002\u0002\u0002\u00048\u0003\u0002\u0002",
    "\u0002\u0006Y\u0003\u0002\u0002\u0002\bz\u0003\u0002\u0002\u0002\n|",
    "\u0003\u0002\u0002\u0002\f~\u0003\u0002\u0002\u0002\u000e\u0082\u0003",
    "\u0002\u0002\u0002\u0010\u0084\u0003\u0002\u0002\u0002\u0012\u0086\u0003",
    "\u0002\u0002\u0002\u0014\u0088\u0003\u0002\u0002\u0002\u0016\u008a\u0003",
    "\u0002\u0002\u0002\u0018\u008e\u0003\u0002\u0002\u0002\u001a\u0092\u0003",
    "\u0002\u0002\u0002\u001c\u0096\u0003\u0002\u0002\u0002\u001e\u009a\u0003",
    "\u0002\u0002\u0002 \u009e\u0003\u0002\u0002\u0002\"\u00a2\u0003\u0002",
    "\u0002\u0002$\u00a4\u0003\u0002\u0002\u0002&\u00a8\u0003\u0002\u0002",
    "\u0002(\u00ad\u0003\u0002\u0002\u0002*\u00be\u0003\u0002\u0002\u0002",
    ",\u00c0\u0003\u0002\u0002\u0002.\u00c2\u0003\u0002\u0002\u000202\u0005",
    "\u0004\u0003\u000213\u0005\u0006\u0004\u000221\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000267\u0007\u0002\u0002\u00037\u0003\u0003",
    "\u0002\u0002\u000289\u0007\u0003\u0002\u00029:\u0007\u0014\u0002\u0002",
    ":;\u0007\u0004\u0002\u0002;<\u0007\u0014\u0002\u0002<=\u0007\u0005\u0002",
    "\u0002=>\u0007\u0014\u0002\u0002>?\u0007\u0006\u0002\u0002?@\u0007\u0014",
    "\u0002\u0002@A\u0007\u0007\u0002\u0002AB\u0007\u0014\u0002\u0002BC\u0007",
    "\b\u0002\u0002CD\u0007\u0014\u0002\u0002DE\u0007\t\u0002\u0002EF\u0007",
    "\u0014\u0002\u0002FG\u0007\n\u0002\u0002GH\u0007\u0014\u0002\u0002H",
    "I\u0007\u000b\u0002\u0002IJ\u0007\u0014\u0002\u0002JK\u0007\f\u0002",
    "\u0002KL\u0007\u0014\u0002\u0002LM\u0007\r\u0002\u0002MN\u0007\u0014",
    "\u0002\u0002NO\u0007\u000e\u0002\u0002OP\u0007\u0014\u0002\u0002PQ\u0007",
    "\u000f\u0002\u0002QR\u0007\u0014\u0002\u0002RS\u0007\u0010\u0002\u0002",
    "ST\u0007\u0014\u0002\u0002TU\u0007\u0011\u0002\u0002UV\u0007\u0014\u0002",
    "\u0002VW\u0007\u0012\u0002\u0002WX\u0007\u0015\u0002\u0002X\u0005\u0003",
    "\u0002\u0002\u0002YZ\u0005\b\u0005\u0002Z[\u0007\u0014\u0002\u0002[",
    "\\\u0005\n\u0006\u0002\\]\u0007\u0014\u0002\u0002]^\u0005\f\u0007\u0002",
    "^_\u0007\u0014\u0002\u0002_`\u0005\u000e\b\u0002`a\u0007\u0014\u0002",
    "\u0002ab\u0005\u0010\t\u0002bc\u0007\u0014\u0002\u0002cd\u0005\u0012",
    "\n\u0002de\u0007\u0014\u0002\u0002ef\u0005\u0014\u000b\u0002fg\u0007",
    "\u0014\u0002\u0002gh\u0005\u0016\f\u0002hi\u0007\u0014\u0002\u0002i",
    "j\u0005\u0018\r\u0002jk\u0007\u0014\u0002\u0002kl\u0005\u001a\u000e",
    "\u0002lm\u0007\u0014\u0002\u0002mn\u0005\u001c\u000f\u0002no\u0007\u0014",
    "\u0002\u0002op\u0005\u001e\u0010\u0002pq\u0007\u0014\u0002\u0002qr\u0005",
    " \u0011\u0002rs\u0007\u0014\u0002\u0002st\u0005\"\u0012\u0002tu\u0007",
    "\u0014\u0002\u0002uv\u0005$\u0013\u0002vw\u0007\u0014\u0002\u0002wx",
    "\u0005&\u0014\u0002xy\u0007\u0015\u0002\u0002y\u0007\u0003\u0002\u0002",
    "\u0002z{\u0005(\u0015\u0002{\t\u0003\u0002\u0002\u0002|}\u0005(\u0015",
    "\u0002}\u000b\u0003\u0002\u0002\u0002~\u007f\u0005(\u0015\u0002\u007f",
    "\r\u0003\u0002\u0002\u0002\u0080\u0083\u0005,\u0017\u0002\u0081\u0083",
    "\u0005(\u0015\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0081",
    "\u0003\u0002\u0002\u0002\u0083\u000f\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0005(\u0015\u0002\u0085\u0011\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0005(\u0015\u0002\u0087\u0013\u0003\u0002\u0002\u0002\u0088\u0089",
    "\u0005(\u0015\u0002\u0089\u0015\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0005(\u0015\u0002\u008b\u0017\u0003\u0002\u0002\u0002\u008c\u008f",
    "\u0005(\u0015\u0002\u008d\u008f\u0005.\u0018\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u0019\u0003",
    "\u0002\u0002\u0002\u0090\u0093\u0005,\u0017\u0002\u0091\u0093\u0005",
    "(\u0015\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003",
    "\u0002\u0002\u0002\u0093\u001b\u0003\u0002\u0002\u0002\u0094\u0097\u0005",
    ",\u0017\u0002\u0095\u0097\u0005(\u0015\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u001d\u0003\u0002",
    "\u0002\u0002\u0098\u009b\u0005,\u0017\u0002\u0099\u009b\u0005(\u0015",
    "\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002",
    "\u0002\u009b\u001f\u0003\u0002\u0002\u0002\u009c\u009f\u0005,\u0017",
    "\u0002\u009d\u009f\u0005(\u0015\u0002\u009e\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f!\u0003\u0002\u0002",
    "\u0002\u00a0\u00a3\u0005,\u0017\u0002\u00a1\u00a3\u0005(\u0015\u0002",
    "\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3#\u0003\u0002\u0002\u0002\u00a4\u00a5\u0005(\u0015\u0002\u00a5",
    "%\u0003\u0002\u0002\u0002\u00a6\u00a9\u0005(\u0015\u0002\u00a7\u00a9",
    "\u0005.\u0018\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a7",
    "\u0003\u0002\u0002\u0002\u00a9\'\u0003\u0002\u0002\u0002\u00aa\u00ae",
    "\u0007\u0017\u0002\u0002\u00ab\u00ae\u0007\u0019\u0002\u0002\u00ac\u00ae",
    "\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003\u0002\u0002\u0002\u00ad\u00ab",
    "\u0003\u0002\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ae)",
    "\u0003\u0002\u0002\u0002\u00af\u00b1\u0007\u0013\u0002\u0002\u00b0\u00af",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2",
    "\u0003\u0002\u0002\u0002\u00b2\u00b9\u0007\u0017\u0002\u0002\u00b3\u00b5",
    "\u0007\u0013\u0002\u0002\u00b4\u00b6\u0007\u0017\u0002\u0002\u00b5\u00b4",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8",
    "\u0003\u0002\u0002\u0002\u00b7\u00b3\u0003\u0002\u0002\u0002\u00b8\u00bb",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bf\u0003\u0002\u0002\u0002\u00bb\u00b9",
    "\u0003\u0002\u0002\u0002\u00bc\u00bf\u0007\u0013\u0002\u0002\u00bd\u00bf",
    "\u0003\u0002\u0002\u0002\u00be\u00b0\u0003\u0002\u0002\u0002\u00be\u00bc",
    "\u0003\u0002\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf+",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u0016\u0002\u0002\u00c1-",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007\u0018\u0002\u0002\u00c3/",
    "\u0003\u0002\u0002\u0002\u00104\u0082\u008e\u0092\u0096\u009a\u009e",
    "\u00a2\u00a8\u00ad\u00b0\u00b5\u00b9\u00be"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'expedition_id'", "'peak_id'", "'peak_name'", 
                     "'year'", "'season'", "'basecamp_date'", "'highpoint_date'", 
                     "'termination_date'", "'termination_reason'", "'highpoint_meters'", 
                     "'members'", "'member_deaths'", "'hired_staff'", "'hired_staff_deaths'", 
                     "'oxygen_used'", "'trekking_agency'", "'|'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "SEP", "NEWLINE", "NUMBER", "TEXT", "INFO", "STRING" ];

var ruleNames =  [ "file", "hdr", "row", "expedition_id", "peak_id", "peak_name", 
                   "year", "season", "basecamp_date", "highpoint_date", 
                   "termination_date", "termination_reason", "highpoint_meters", 
                   "members", "member_deaths", "hired_staff", "hired_staff_deaths", 
                   "oxygen_used", "trekking_agency", "field", "field_list", 
                   "number", "info" ];

function expeditionsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

expeditionsParser.prototype = Object.create(antlr4.Parser.prototype);
expeditionsParser.prototype.constructor = expeditionsParser;

Object.defineProperty(expeditionsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

expeditionsParser.EOF = antlr4.Token.EOF;
expeditionsParser.T__0 = 1;
expeditionsParser.T__1 = 2;
expeditionsParser.T__2 = 3;
expeditionsParser.T__3 = 4;
expeditionsParser.T__4 = 5;
expeditionsParser.T__5 = 6;
expeditionsParser.T__6 = 7;
expeditionsParser.T__7 = 8;
expeditionsParser.T__8 = 9;
expeditionsParser.T__9 = 10;
expeditionsParser.T__10 = 11;
expeditionsParser.T__11 = 12;
expeditionsParser.T__12 = 13;
expeditionsParser.T__13 = 14;
expeditionsParser.T__14 = 15;
expeditionsParser.T__15 = 16;
expeditionsParser.T__16 = 17;
expeditionsParser.SEP = 18;
expeditionsParser.NEWLINE = 19;
expeditionsParser.NUMBER = 20;
expeditionsParser.TEXT = 21;
expeditionsParser.INFO = 22;
expeditionsParser.STRING = 23;

expeditionsParser.RULE_file = 0;
expeditionsParser.RULE_hdr = 1;
expeditionsParser.RULE_row = 2;
expeditionsParser.RULE_expedition_id = 3;
expeditionsParser.RULE_peak_id = 4;
expeditionsParser.RULE_peak_name = 5;
expeditionsParser.RULE_year = 6;
expeditionsParser.RULE_season = 7;
expeditionsParser.RULE_basecamp_date = 8;
expeditionsParser.RULE_highpoint_date = 9;
expeditionsParser.RULE_termination_date = 10;
expeditionsParser.RULE_termination_reason = 11;
expeditionsParser.RULE_highpoint_meters = 12;
expeditionsParser.RULE_members = 13;
expeditionsParser.RULE_member_deaths = 14;
expeditionsParser.RULE_hired_staff = 15;
expeditionsParser.RULE_hired_staff_deaths = 16;
expeditionsParser.RULE_oxygen_used = 17;
expeditionsParser.RULE_trekking_agency = 18;
expeditionsParser.RULE_field = 19;
expeditionsParser.RULE_field_list = 20;
expeditionsParser.RULE_number = 21;
expeditionsParser.RULE_info = 22;


function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.hdr = function() {
    return this.getTypedRuleContext(HdrContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(expeditionsParser.EOF, 0);
};

FileContext.prototype.row = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RowContext);
    } else {
        return this.getTypedRuleContext(RowContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.FileContext = FileContext;

expeditionsParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, expeditionsParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.hdr();
        this.state = 48; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 47;
            this.row();
            this.state = 50; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << expeditionsParser.SEP) | (1 << expeditionsParser.TEXT) | (1 << expeditionsParser.STRING))) !== 0));
        this.state = 52;
        this.match(expeditionsParser.EOF);
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


function HdrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_hdr;
    return this;
}

HdrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HdrContext.prototype.constructor = HdrContext;

HdrContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expeditionsParser.SEP);
    } else {
        return this.getToken(expeditionsParser.SEP, i);
    }
};


HdrContext.prototype.NEWLINE = function() {
    return this.getToken(expeditionsParser.NEWLINE, 0);
};

HdrContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterHdr(this);
	}
};

HdrContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitHdr(this);
	}
};

HdrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitHdr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.HdrContext = HdrContext;

expeditionsParser.prototype.hdr = function() {

    var localctx = new HdrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, expeditionsParser.RULE_hdr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(expeditionsParser.T__0);
        this.state = 55;
        this.match(expeditionsParser.SEP);
        this.state = 56;
        this.match(expeditionsParser.T__1);
        this.state = 57;
        this.match(expeditionsParser.SEP);
        this.state = 58;
        this.match(expeditionsParser.T__2);
        this.state = 59;
        this.match(expeditionsParser.SEP);
        this.state = 60;
        this.match(expeditionsParser.T__3);
        this.state = 61;
        this.match(expeditionsParser.SEP);
        this.state = 62;
        this.match(expeditionsParser.T__4);
        this.state = 63;
        this.match(expeditionsParser.SEP);
        this.state = 64;
        this.match(expeditionsParser.T__5);
        this.state = 65;
        this.match(expeditionsParser.SEP);
        this.state = 66;
        this.match(expeditionsParser.T__6);
        this.state = 67;
        this.match(expeditionsParser.SEP);
        this.state = 68;
        this.match(expeditionsParser.T__7);
        this.state = 69;
        this.match(expeditionsParser.SEP);
        this.state = 70;
        this.match(expeditionsParser.T__8);
        this.state = 71;
        this.match(expeditionsParser.SEP);
        this.state = 72;
        this.match(expeditionsParser.T__9);
        this.state = 73;
        this.match(expeditionsParser.SEP);
        this.state = 74;
        this.match(expeditionsParser.T__10);
        this.state = 75;
        this.match(expeditionsParser.SEP);
        this.state = 76;
        this.match(expeditionsParser.T__11);
        this.state = 77;
        this.match(expeditionsParser.SEP);
        this.state = 78;
        this.match(expeditionsParser.T__12);
        this.state = 79;
        this.match(expeditionsParser.SEP);
        this.state = 80;
        this.match(expeditionsParser.T__13);
        this.state = 81;
        this.match(expeditionsParser.SEP);
        this.state = 82;
        this.match(expeditionsParser.T__14);
        this.state = 83;
        this.match(expeditionsParser.SEP);
        this.state = 84;
        this.match(expeditionsParser.T__15);
        this.state = 85;
        this.match(expeditionsParser.NEWLINE);
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


function RowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_row;
    return this;
}

RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RowContext.prototype.constructor = RowContext;

RowContext.prototype.expedition_id = function() {
    return this.getTypedRuleContext(Expedition_idContext,0);
};

RowContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expeditionsParser.SEP);
    } else {
        return this.getToken(expeditionsParser.SEP, i);
    }
};


RowContext.prototype.peak_id = function() {
    return this.getTypedRuleContext(Peak_idContext,0);
};

RowContext.prototype.peak_name = function() {
    return this.getTypedRuleContext(Peak_nameContext,0);
};

RowContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

RowContext.prototype.season = function() {
    return this.getTypedRuleContext(SeasonContext,0);
};

RowContext.prototype.basecamp_date = function() {
    return this.getTypedRuleContext(Basecamp_dateContext,0);
};

RowContext.prototype.highpoint_date = function() {
    return this.getTypedRuleContext(Highpoint_dateContext,0);
};

RowContext.prototype.termination_date = function() {
    return this.getTypedRuleContext(Termination_dateContext,0);
};

RowContext.prototype.termination_reason = function() {
    return this.getTypedRuleContext(Termination_reasonContext,0);
};

RowContext.prototype.highpoint_meters = function() {
    return this.getTypedRuleContext(Highpoint_metersContext,0);
};

RowContext.prototype.members = function() {
    return this.getTypedRuleContext(MembersContext,0);
};

RowContext.prototype.member_deaths = function() {
    return this.getTypedRuleContext(Member_deathsContext,0);
};

RowContext.prototype.hired_staff = function() {
    return this.getTypedRuleContext(Hired_staffContext,0);
};

RowContext.prototype.hired_staff_deaths = function() {
    return this.getTypedRuleContext(Hired_staff_deathsContext,0);
};

RowContext.prototype.oxygen_used = function() {
    return this.getTypedRuleContext(Oxygen_usedContext,0);
};

RowContext.prototype.trekking_agency = function() {
    return this.getTypedRuleContext(Trekking_agencyContext,0);
};

RowContext.prototype.NEWLINE = function() {
    return this.getToken(expeditionsParser.NEWLINE, 0);
};

RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterRow(this);
	}
};

RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitRow(this);
	}
};

RowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.RowContext = RowContext;

expeditionsParser.prototype.row = function() {

    var localctx = new RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, expeditionsParser.RULE_row);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.expedition_id();
        this.state = 88;
        this.match(expeditionsParser.SEP);
        this.state = 89;
        this.peak_id();
        this.state = 90;
        this.match(expeditionsParser.SEP);
        this.state = 91;
        this.peak_name();
        this.state = 92;
        this.match(expeditionsParser.SEP);
        this.state = 93;
        this.year();
        this.state = 94;
        this.match(expeditionsParser.SEP);
        this.state = 95;
        this.season();
        this.state = 96;
        this.match(expeditionsParser.SEP);
        this.state = 97;
        this.basecamp_date();
        this.state = 98;
        this.match(expeditionsParser.SEP);
        this.state = 99;
        this.highpoint_date();
        this.state = 100;
        this.match(expeditionsParser.SEP);
        this.state = 101;
        this.termination_date();
        this.state = 102;
        this.match(expeditionsParser.SEP);
        this.state = 103;
        this.termination_reason();
        this.state = 104;
        this.match(expeditionsParser.SEP);
        this.state = 105;
        this.highpoint_meters();
        this.state = 106;
        this.match(expeditionsParser.SEP);
        this.state = 107;
        this.members();
        this.state = 108;
        this.match(expeditionsParser.SEP);
        this.state = 109;
        this.member_deaths();
        this.state = 110;
        this.match(expeditionsParser.SEP);
        this.state = 111;
        this.hired_staff();
        this.state = 112;
        this.match(expeditionsParser.SEP);
        this.state = 113;
        this.hired_staff_deaths();
        this.state = 114;
        this.match(expeditionsParser.SEP);
        this.state = 115;
        this.oxygen_used();
        this.state = 116;
        this.match(expeditionsParser.SEP);
        this.state = 117;
        this.trekking_agency();
        this.state = 118;
        this.match(expeditionsParser.NEWLINE);
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


function Expedition_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_expedition_id;
    return this;
}

Expedition_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expedition_idContext.prototype.constructor = Expedition_idContext;

Expedition_idContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Expedition_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterExpedition_id(this);
	}
};

Expedition_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitExpedition_id(this);
	}
};

Expedition_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitExpedition_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Expedition_idContext = Expedition_idContext;

expeditionsParser.prototype.expedition_id = function() {

    var localctx = new Expedition_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, expeditionsParser.RULE_expedition_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.field();
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


function Peak_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_peak_id;
    return this;
}

Peak_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Peak_idContext.prototype.constructor = Peak_idContext;

Peak_idContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Peak_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterPeak_id(this);
	}
};

Peak_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitPeak_id(this);
	}
};

Peak_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitPeak_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Peak_idContext = Peak_idContext;

expeditionsParser.prototype.peak_id = function() {

    var localctx = new Peak_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, expeditionsParser.RULE_peak_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.field();
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


function Peak_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_peak_name;
    return this;
}

Peak_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Peak_nameContext.prototype.constructor = Peak_nameContext;

Peak_nameContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Peak_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterPeak_name(this);
	}
};

Peak_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitPeak_name(this);
	}
};

Peak_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitPeak_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Peak_nameContext = Peak_nameContext;

expeditionsParser.prototype.peak_name = function() {

    var localctx = new Peak_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, expeditionsParser.RULE_peak_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.field();
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


function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

YearContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

YearContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterYear(this);
	}
};

YearContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitYear(this);
	}
};

YearContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitYear(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.YearContext = YearContext;

expeditionsParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, expeditionsParser.RULE_year);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 126;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
            this.field();
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


function SeasonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_season;
    return this;
}

SeasonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeasonContext.prototype.constructor = SeasonContext;

SeasonContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

SeasonContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterSeason(this);
	}
};

SeasonContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitSeason(this);
	}
};

SeasonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitSeason(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.SeasonContext = SeasonContext;

expeditionsParser.prototype.season = function() {

    var localctx = new SeasonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, expeditionsParser.RULE_season);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.field();
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


function Basecamp_dateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_basecamp_date;
    return this;
}

Basecamp_dateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Basecamp_dateContext.prototype.constructor = Basecamp_dateContext;

Basecamp_dateContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Basecamp_dateContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterBasecamp_date(this);
	}
};

Basecamp_dateContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitBasecamp_date(this);
	}
};

Basecamp_dateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitBasecamp_date(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Basecamp_dateContext = Basecamp_dateContext;

expeditionsParser.prototype.basecamp_date = function() {

    var localctx = new Basecamp_dateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, expeditionsParser.RULE_basecamp_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.field();
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


function Highpoint_dateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_highpoint_date;
    return this;
}

Highpoint_dateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Highpoint_dateContext.prototype.constructor = Highpoint_dateContext;

Highpoint_dateContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Highpoint_dateContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterHighpoint_date(this);
	}
};

Highpoint_dateContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitHighpoint_date(this);
	}
};

Highpoint_dateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitHighpoint_date(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Highpoint_dateContext = Highpoint_dateContext;

expeditionsParser.prototype.highpoint_date = function() {

    var localctx = new Highpoint_dateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, expeditionsParser.RULE_highpoint_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.field();
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


function Termination_dateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_termination_date;
    return this;
}

Termination_dateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Termination_dateContext.prototype.constructor = Termination_dateContext;

Termination_dateContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Termination_dateContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterTermination_date(this);
	}
};

Termination_dateContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitTermination_date(this);
	}
};

Termination_dateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitTermination_date(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Termination_dateContext = Termination_dateContext;

expeditionsParser.prototype.termination_date = function() {

    var localctx = new Termination_dateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, expeditionsParser.RULE_termination_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.field();
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


function Termination_reasonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_termination_reason;
    return this;
}

Termination_reasonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Termination_reasonContext.prototype.constructor = Termination_reasonContext;

Termination_reasonContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Termination_reasonContext.prototype.info = function() {
    return this.getTypedRuleContext(InfoContext,0);
};

Termination_reasonContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterTermination_reason(this);
	}
};

Termination_reasonContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitTermination_reason(this);
	}
};

Termination_reasonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitTermination_reason(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Termination_reasonContext = Termination_reasonContext;

expeditionsParser.prototype.termination_reason = function() {

    var localctx = new Termination_reasonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, expeditionsParser.RULE_termination_reason);
    try {
        this.state = 140;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.field();
            break;
        case expeditionsParser.INFO:
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.info();
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


function Highpoint_metersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_highpoint_meters;
    return this;
}

Highpoint_metersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Highpoint_metersContext.prototype.constructor = Highpoint_metersContext;

Highpoint_metersContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Highpoint_metersContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Highpoint_metersContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterHighpoint_meters(this);
	}
};

Highpoint_metersContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitHighpoint_meters(this);
	}
};

Highpoint_metersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitHighpoint_meters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Highpoint_metersContext = Highpoint_metersContext;

expeditionsParser.prototype.highpoint_meters = function() {

    var localctx = new Highpoint_metersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, expeditionsParser.RULE_highpoint_meters);
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.field();
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


function MembersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_members;
    return this;
}

MembersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MembersContext.prototype.constructor = MembersContext;

MembersContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

MembersContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

MembersContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterMembers(this);
	}
};

MembersContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitMembers(this);
	}
};

MembersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitMembers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.MembersContext = MembersContext;

expeditionsParser.prototype.members = function() {

    var localctx = new MembersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, expeditionsParser.RULE_members);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.field();
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


function Member_deathsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_member_deaths;
    return this;
}

Member_deathsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Member_deathsContext.prototype.constructor = Member_deathsContext;

Member_deathsContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Member_deathsContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Member_deathsContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterMember_deaths(this);
	}
};

Member_deathsContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitMember_deaths(this);
	}
};

Member_deathsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitMember_deaths(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Member_deathsContext = Member_deathsContext;

expeditionsParser.prototype.member_deaths = function() {

    var localctx = new Member_deathsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, expeditionsParser.RULE_member_deaths);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.field();
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


function Hired_staffContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_hired_staff;
    return this;
}

Hired_staffContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hired_staffContext.prototype.constructor = Hired_staffContext;

Hired_staffContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Hired_staffContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Hired_staffContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterHired_staff(this);
	}
};

Hired_staffContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitHired_staff(this);
	}
};

Hired_staffContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitHired_staff(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Hired_staffContext = Hired_staffContext;

expeditionsParser.prototype.hired_staff = function() {

    var localctx = new Hired_staffContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, expeditionsParser.RULE_hired_staff);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.field();
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


function Hired_staff_deathsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_hired_staff_deaths;
    return this;
}

Hired_staff_deathsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hired_staff_deathsContext.prototype.constructor = Hired_staff_deathsContext;

Hired_staff_deathsContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Hired_staff_deathsContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Hired_staff_deathsContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterHired_staff_deaths(this);
	}
};

Hired_staff_deathsContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitHired_staff_deaths(this);
	}
};

Hired_staff_deathsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitHired_staff_deaths(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Hired_staff_deathsContext = Hired_staff_deathsContext;

expeditionsParser.prototype.hired_staff_deaths = function() {

    var localctx = new Hired_staff_deathsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, expeditionsParser.RULE_hired_staff_deaths);
    try {
        this.state = 160;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.number();
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.field();
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


function Oxygen_usedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_oxygen_used;
    return this;
}

Oxygen_usedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Oxygen_usedContext.prototype.constructor = Oxygen_usedContext;

Oxygen_usedContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Oxygen_usedContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterOxygen_used(this);
	}
};

Oxygen_usedContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitOxygen_used(this);
	}
};

Oxygen_usedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitOxygen_used(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Oxygen_usedContext = Oxygen_usedContext;

expeditionsParser.prototype.oxygen_used = function() {

    var localctx = new Oxygen_usedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, expeditionsParser.RULE_oxygen_used);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.field();
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


function Trekking_agencyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_trekking_agency;
    return this;
}

Trekking_agencyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trekking_agencyContext.prototype.constructor = Trekking_agencyContext;

Trekking_agencyContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Trekking_agencyContext.prototype.info = function() {
    return this.getTypedRuleContext(InfoContext,0);
};

Trekking_agencyContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterTrekking_agency(this);
	}
};

Trekking_agencyContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitTrekking_agency(this);
	}
};

Trekking_agencyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitTrekking_agency(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Trekking_agencyContext = Trekking_agencyContext;

expeditionsParser.prototype.trekking_agency = function() {

    var localctx = new Trekking_agencyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, expeditionsParser.RULE_trekking_agency);
    try {
        this.state = 166;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.NEWLINE:
        case expeditionsParser.TEXT:
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.field();
            break;
        case expeditionsParser.INFO:
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            this.info();
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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.TEXT = function() {
    return this.getToken(expeditionsParser.TEXT, 0);
};

FieldContext.prototype.STRING = function() {
    return this.getToken(expeditionsParser.STRING, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.FieldContext = FieldContext;

expeditionsParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, expeditionsParser.RULE_field);
    try {
        this.state = 171;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expeditionsParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.match(expeditionsParser.TEXT);
            break;
        case expeditionsParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.match(expeditionsParser.STRING);
            break;
        case expeditionsParser.SEP:
        case expeditionsParser.NEWLINE:
            this.enterOuterAlt(localctx, 3);

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


function Field_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_field_list;
    return this;
}

Field_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_listContext.prototype.constructor = Field_listContext;

Field_listContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expeditionsParser.TEXT);
    } else {
        return this.getToken(expeditionsParser.TEXT, i);
    }
};


Field_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterField_list(this);
	}
};

Field_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitField_list(this);
	}
};

Field_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitField_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.Field_listContext = Field_listContext;

expeditionsParser.prototype.field_list = function() {

    var localctx = new Field_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, expeditionsParser.RULE_field_list);
    var _la = 0; // Token type
    try {
        this.state = 188;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===expeditionsParser.T__16) {
                this.state = 173;
                this.match(expeditionsParser.T__16);
            }

            this.state = 176;
            this.match(expeditionsParser.TEXT);
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===expeditionsParser.T__16) {
                this.state = 177;
                this.match(expeditionsParser.T__16);
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===expeditionsParser.TEXT) {
                    this.state = 178;
                    this.match(expeditionsParser.TEXT);
                }

                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
            this.match(expeditionsParser.T__16);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);

            break;

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


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(expeditionsParser.NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.NumberContext = NumberContext;

expeditionsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, expeditionsParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(expeditionsParser.NUMBER);
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


function InfoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expeditionsParser.RULE_info;
    return this;
}

InfoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfoContext.prototype.constructor = InfoContext;

InfoContext.prototype.INFO = function() {
    return this.getToken(expeditionsParser.INFO, 0);
};

InfoContext.prototype.enterRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.enterInfo(this);
	}
};

InfoContext.prototype.exitRule = function(listener) {
    if(listener instanceof expeditionsListener ) {
        listener.exitInfo(this);
	}
};

InfoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expeditionsVisitor ) {
        return visitor.visitInfo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expeditionsParser.InfoContext = InfoContext;

expeditionsParser.prototype.info = function() {

    var localctx = new InfoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, expeditionsParser.RULE_info);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(expeditionsParser.INFO);
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


exports.expeditionsParser = expeditionsParser;
