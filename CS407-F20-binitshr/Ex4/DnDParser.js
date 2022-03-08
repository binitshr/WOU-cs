// Generated from DnD.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DnDListener = require('./DnDListener').DnDListener;
var DnDVisitor = require('./DnDVisitor').DnDVisitor;

var grammarFileName = "DnD.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u011a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0003",
    "\u0002\u0003\u0002\u0006\u0002K\n\u0002\r\u0002\u000e\u0002L\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u00c9\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0005\"\u0105\n\"\u0003#\u0005#\u0108",
    "\n#\u0003#\u0003#\u0003#\u0005#\u010d\n#\u0007#\u010f\n#\f#\u000e#\u0112",
    "\u000b#\u0003#\u0003#\u0005#\u0116\n#\u0003$\u0003$\u0003$\u0002\u0002",
    "%\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDF\u0002\u0002\u0002\u00fe\u0002H\u0003",
    "\u0002\u0002\u0002\u0004P\u0003\u0002\u0002\u0002\u0006\u008b\u0003",
    "\u0002\u0002\u0002\b\u00c8\u0003\u0002\u0002\u0002\n\u00ca\u0003\u0002",
    "\u0002\u0002\f\u00cc\u0003\u0002\u0002\u0002\u000e\u00ce\u0003\u0002",
    "\u0002\u0002\u0010\u00d0\u0003\u0002\u0002\u0002\u0012\u00d2\u0003\u0002",
    "\u0002\u0002\u0014\u00d4\u0003\u0002\u0002\u0002\u0016\u00d6\u0003\u0002",
    "\u0002\u0002\u0018\u00d8\u0003\u0002\u0002\u0002\u001a\u00da\u0003\u0002",
    "\u0002\u0002\u001c\u00dc\u0003\u0002\u0002\u0002\u001e\u00de\u0003\u0002",
    "\u0002\u0002 \u00e0\u0003\u0002\u0002\u0002\"\u00e2\u0003\u0002\u0002",
    "\u0002$\u00e4\u0003\u0002\u0002\u0002&\u00e6\u0003\u0002\u0002\u0002",
    "(\u00e8\u0003\u0002\u0002\u0002*\u00ea\u0003\u0002\u0002\u0002,\u00ec",
    "\u0003\u0002\u0002\u0002.\u00ee\u0003\u0002\u0002\u00020\u00f0\u0003",
    "\u0002\u0002\u00022\u00f2\u0003\u0002\u0002\u00024\u00f4\u0003\u0002",
    "\u0002\u00026\u00f6\u0003\u0002\u0002\u00028\u00f8\u0003\u0002\u0002",
    "\u0002:\u00fa\u0003\u0002\u0002\u0002<\u00fc\u0003\u0002\u0002\u0002",
    ">\u00fe\u0003\u0002\u0002\u0002@\u0100\u0003\u0002\u0002\u0002B\u0104",
    "\u0003\u0002\u0002\u0002D\u0115\u0003\u0002\u0002\u0002F\u0117\u0003",
    "\u0002\u0002\u0002HJ\u0005\u0004\u0003\u0002IK\u0005\u0006\u0004\u0002",
    "JI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0007\u0002",
    "\u0002\u0003O\u0003\u0003\u0002\u0002\u0002PQ\u0007\u0003\u0002\u0002",
    "QR\u0007!\u0002\u0002RS\u0007\u0004\u0002\u0002ST\u0007!\u0002\u0002",
    "TU\u0007\u0005\u0002\u0002UV\u0007!\u0002\u0002VW\u0007\u0006\u0002",
    "\u0002WX\u0007!\u0002\u0002XY\u0007\u0007\u0002\u0002YZ\u0007!\u0002",
    "\u0002Z[\u0007\b\u0002\u0002[\\\u0007!\u0002\u0002\\]\u0007\t\u0002",
    "\u0002]^\u0007!\u0002\u0002^_\u0007\n\u0002\u0002_`\u0007!\u0002\u0002",
    "`a\u0007\u000b\u0002\u0002ab\u0007!\u0002\u0002bc\u0007\f\u0002\u0002",
    "cd\u0007!\u0002\u0002de\u0007\r\u0002\u0002ef\u0007!\u0002\u0002fg\u0007",
    "\u000e\u0002\u0002gh\u0007!\u0002\u0002hi\u0007\u000f\u0002\u0002ij",
    "\u0007!\u0002\u0002jk\u0007\u0010\u0002\u0002kl\u0007!\u0002\u0002l",
    "m\u0007\u0011\u0002\u0002mn\u0007!\u0002\u0002no\u0007\u0012\u0002\u0002",
    "op\u0007!\u0002\u0002pq\u0007\u0013\u0002\u0002qr\u0007!\u0002\u0002",
    "rs\u0007\u0014\u0002\u0002st\u0007!\u0002\u0002tu\u0007\u0015\u0002",
    "\u0002uv\u0007!\u0002\u0002vw\u0007\u0016\u0002\u0002wx\u0007!\u0002",
    "\u0002xy\u0007\u0017\u0002\u0002yz\u0007!\u0002\u0002z{\u0007\u0018",
    "\u0002\u0002{|\u0007!\u0002\u0002|}\u0007\u0019\u0002\u0002}~\u0007",
    "!\u0002\u0002~\u007f\u0007\u001a\u0002\u0002\u007f\u0080\u0007!\u0002",
    "\u0002\u0080\u0081\u0007\u001b\u0002\u0002\u0081\u0082\u0007!\u0002",
    "\u0002\u0082\u0083\u0007\u001c\u0002\u0002\u0083\u0084\u0007!\u0002",
    "\u0002\u0084\u0085\u0007\u001d\u0002\u0002\u0085\u0086\u0007!\u0002",
    "\u0002\u0086\u0087\u0007\u001e\u0002\u0002\u0087\u0088\u0007!\u0002",
    "\u0002\u0088\u0089\u0007\u001f\u0002\u0002\u0089\u008a\u0007\"\u0002",
    "\u0002\u008a\u0005\u0003\u0002\u0002\u0002\u008b\u008c\u0005\b\u0005",
    "\u0002\u008c\u008d\u0007!\u0002\u0002\u008d\u008e\u0005\n\u0006\u0002",
    "\u008e\u008f\u0007!\u0002\u0002\u008f\u0090\u0005\f\u0007\u0002\u0090",
    "\u0091\u0007!\u0002\u0002\u0091\u0092\u0005\u000e\b\u0002\u0092\u0093",
    "\u0007!\u0002\u0002\u0093\u0094\u0005\u0010\t\u0002\u0094\u0095\u0007",
    "!\u0002\u0002\u0095\u0096\u0005\u0012\n\u0002\u0096\u0097\u0007!\u0002",
    "\u0002\u0097\u0098\u0005\u0014\u000b\u0002\u0098\u0099\u0007!\u0002",
    "\u0002\u0099\u009a\u0005\u0016\f\u0002\u009a\u009b\u0007!\u0002\u0002",
    "\u009b\u009c\u0005\u0018\r\u0002\u009c\u009d\u0007!\u0002\u0002\u009d",
    "\u009e\u0005\u001a\u000e\u0002\u009e\u009f\u0007!\u0002\u0002\u009f",
    "\u00a0\u0005\u001c\u000f\u0002\u00a0\u00a1\u0007!\u0002\u0002\u00a1",
    "\u00a2\u0005\u001e\u0010\u0002\u00a2\u00a3\u0007!\u0002\u0002\u00a3",
    "\u00a4\u0005 \u0011\u0002\u00a4\u00a5\u0007!\u0002\u0002\u00a5\u00a6",
    "\u0005\"\u0012\u0002\u00a6\u00a7\u0007!\u0002\u0002\u00a7\u00a8\u0005",
    "$\u0013\u0002\u00a8\u00a9\u0007!\u0002\u0002\u00a9\u00aa\u0005&\u0014",
    "\u0002\u00aa\u00ab\u0007!\u0002\u0002\u00ab\u00ac\u0005(\u0015\u0002",
    "\u00ac\u00ad\u0007!\u0002\u0002\u00ad\u00ae\u0005*\u0016\u0002\u00ae",
    "\u00af\u0007!\u0002\u0002\u00af\u00b0\u0005,\u0017\u0002\u00b0\u00b1",
    "\u0007!\u0002\u0002\u00b1\u00b2\u0005.\u0018\u0002\u00b2\u00b3\u0007",
    "!\u0002\u0002\u00b3\u00b4\u00050\u0019\u0002\u00b4\u00b5\u0007!\u0002",
    "\u0002\u00b5\u00b6\u00052\u001a\u0002\u00b6\u00b7\u0007!\u0002\u0002",
    "\u00b7\u00b8\u00054\u001b\u0002\u00b8\u00b9\u0007!\u0002\u0002\u00b9",
    "\u00ba\u00056\u001c\u0002\u00ba\u00bb\u0007!\u0002\u0002\u00bb\u00bc",
    "\u00058\u001d\u0002\u00bc\u00bd\u0007!\u0002\u0002\u00bd\u00be\u0005",
    ":\u001e\u0002\u00be\u00bf\u0007!\u0002\u0002\u00bf\u00c0\u0005<\u001f",
    "\u0002\u00c0\u00c1\u0007!\u0002\u0002\u00c1\u00c2\u0005> \u0002\u00c2",
    "\u00c3\u0007!\u0002\u0002\u00c3\u00c4\u0005@!\u0002\u00c4\u00c5\u0007",
    "\"\u0002\u0002\u00c5\u0007\u0003\u0002\u0002\u0002\u00c6\u00c9\u0005",
    "B\"\u0002\u00c7\u00c9\u0005F$\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\t\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0005B\"\u0002\u00cb\u000b\u0003\u0002\u0002\u0002\u00cc",
    "\u00cd\u0005B\"\u0002\u00cd\r\u0003\u0002\u0002\u0002\u00ce\u00cf\u0005",
    "B\"\u0002\u00cf\u000f\u0003\u0002\u0002\u0002\u00d0\u00d1\u0005D#\u0002",
    "\u00d1\u0011\u0003\u0002\u0002\u0002\u00d2\u00d3\u0005D#\u0002\u00d3",
    "\u0013\u0003\u0002\u0002\u0002\u00d4\u00d5\u0005D#\u0002\u00d5\u0015",
    "\u0003\u0002\u0002\u0002\u00d6\u00d7\u0005F$\u0002\u00d7\u0017\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0005D#\u0002\u00d9\u0019\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0005F$\u0002\u00db\u001b\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0005F$\u0002\u00dd\u001d\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0005F$\u0002\u00df\u001f\u0003\u0002\u0002\u0002\u00e0",
    "\u00e1\u0005F$\u0002\u00e1!\u0003\u0002\u0002\u0002\u00e2\u00e3\u0005",
    "F$\u0002\u00e3#\u0003\u0002\u0002\u0002\u00e4\u00e5\u0005F$\u0002\u00e5",
    "%\u0003\u0002\u0002\u0002\u00e6\u00e7\u0005F$\u0002\u00e7\'\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0005F$\u0002\u00e9)\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0005B\"\u0002\u00eb+\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0005D#\u0002\u00ed-\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005D#\u0002",
    "\u00ef/\u0003\u0002\u0002\u0002\u00f0\u00f1\u0005D#\u0002\u00f11\u0003",
    "\u0002\u0002\u0002\u00f2\u00f3\u0005B\"\u0002\u00f33\u0003\u0002\u0002",
    "\u0002\u00f4\u00f5\u0005B\"\u0002\u00f55\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0005B\"\u0002\u00f77\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005",
    "B\"\u0002\u00f99\u0003\u0002\u0002\u0002\u00fa\u00fb\u0005B\"\u0002",
    "\u00fb;\u0003\u0002\u0002\u0002\u00fc\u00fd\u0005D#\u0002\u00fd=\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\u0005D#\u0002\u00ff?\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0005B\"\u0002\u0101A\u0003\u0002\u0002\u0002\u0102",
    "\u0105\u0007$\u0002\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104",
    "\u0102\u0003\u0002\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105",
    "C\u0003\u0002\u0002\u0002\u0106\u0108\u0007 \u0002\u0002\u0107\u0106",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0003\u0002\u0002\u0002\u0109\u0110\u0007$\u0002\u0002\u010a\u010c",
    "\u0007 \u0002\u0002\u010b\u010d\u0007$\u0002\u0002\u010c\u010b\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010f\u0003",
    "\u0002\u0002\u0002\u010e\u010a\u0003\u0002\u0002\u0002\u010f\u0112\u0003",
    "\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110\u0111\u0003",
    "\u0002\u0002\u0002\u0111\u0116\u0003\u0002\u0002\u0002\u0112\u0110\u0003",
    "\u0002\u0002\u0002\u0113\u0116\u0007 \u0002\u0002\u0114\u0116\u0003",
    "\u0002\u0002\u0002\u0115\u0107\u0003\u0002\u0002\u0002\u0115\u0113\u0003",
    "\u0002\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0116E\u0003",
    "\u0002\u0002\u0002\u0117\u0118\u0007#\u0002\u0002\u0118G\u0003\u0002",
    "\u0002\u0002\tL\u00c8\u0104\u0107\u010c\u0110\u0115"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'name'", "'race'", "'background'", "'date'", 
                     "'class'", "'justClass'", "'subclass'", "'level'", 
                     "'feats'", "'HP'", "'AC'", "'Str'", "'Dex'", "'Con'", 
                     "'Int'", "'Wis'", "'Cha'", "'alignment'", "'skills'", 
                     "'weapons'", "'spells'", "'day'", "'processedAlignment'", 
                     "'good'", "'lawful'", "'processedRace'", "'processedSpells'", 
                     "'processedWeapons'", "'levelGroup'", "'|'", "'\t'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "SEP", "NEWLINE", "NUMBER", 
                      "TEXT" ];

var ruleNames =  [ "file", "hdr", "row", "name", "race", "background", "date", 
                   "fclass", "justClass", "subclass", "level", "feats", 
                   "hP", "aC", "str", "dex", "con", "fint", "wis", "cha", 
                   "alignment", "skills", "weapons", "spells", "day", "processedAlignment", 
                   "good", "lawful", "processedRace", "processedSpells", 
                   "processedWeapons", "levelGroup", "field", "field_list", 
                   "number" ];

function DnDParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DnDParser.prototype = Object.create(antlr4.Parser.prototype);
DnDParser.prototype.constructor = DnDParser;

Object.defineProperty(DnDParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DnDParser.EOF = antlr4.Token.EOF;
DnDParser.T__0 = 1;
DnDParser.T__1 = 2;
DnDParser.T__2 = 3;
DnDParser.T__3 = 4;
DnDParser.T__4 = 5;
DnDParser.T__5 = 6;
DnDParser.T__6 = 7;
DnDParser.T__7 = 8;
DnDParser.T__8 = 9;
DnDParser.T__9 = 10;
DnDParser.T__10 = 11;
DnDParser.T__11 = 12;
DnDParser.T__12 = 13;
DnDParser.T__13 = 14;
DnDParser.T__14 = 15;
DnDParser.T__15 = 16;
DnDParser.T__16 = 17;
DnDParser.T__17 = 18;
DnDParser.T__18 = 19;
DnDParser.T__19 = 20;
DnDParser.T__20 = 21;
DnDParser.T__21 = 22;
DnDParser.T__22 = 23;
DnDParser.T__23 = 24;
DnDParser.T__24 = 25;
DnDParser.T__25 = 26;
DnDParser.T__26 = 27;
DnDParser.T__27 = 28;
DnDParser.T__28 = 29;
DnDParser.T__29 = 30;
DnDParser.SEP = 31;
DnDParser.NEWLINE = 32;
DnDParser.NUMBER = 33;
DnDParser.TEXT = 34;

DnDParser.RULE_file = 0;
DnDParser.RULE_hdr = 1;
DnDParser.RULE_row = 2;
DnDParser.RULE_name = 3;
DnDParser.RULE_race = 4;
DnDParser.RULE_background = 5;
DnDParser.RULE_date = 6;
DnDParser.RULE_fclass = 7;
DnDParser.RULE_justClass = 8;
DnDParser.RULE_subclass = 9;
DnDParser.RULE_level = 10;
DnDParser.RULE_feats = 11;
DnDParser.RULE_hP = 12;
DnDParser.RULE_aC = 13;
DnDParser.RULE_str = 14;
DnDParser.RULE_dex = 15;
DnDParser.RULE_con = 16;
DnDParser.RULE_fint = 17;
DnDParser.RULE_wis = 18;
DnDParser.RULE_cha = 19;
DnDParser.RULE_alignment = 20;
DnDParser.RULE_skills = 21;
DnDParser.RULE_weapons = 22;
DnDParser.RULE_spells = 23;
DnDParser.RULE_day = 24;
DnDParser.RULE_processedAlignment = 25;
DnDParser.RULE_good = 26;
DnDParser.RULE_lawful = 27;
DnDParser.RULE_processedRace = 28;
DnDParser.RULE_processedSpells = 29;
DnDParser.RULE_processedWeapons = 30;
DnDParser.RULE_levelGroup = 31;
DnDParser.RULE_field = 32;
DnDParser.RULE_field_list = 33;
DnDParser.RULE_number = 34;


function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.hdr = function() {
    return this.getTypedRuleContext(HdrContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(DnDParser.EOF, 0);
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
    if(listener instanceof DnDListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.FileContext = FileContext;

DnDParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DnDParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.hdr();
        this.state = 72; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 71;
            this.row();
            this.state = 74; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (DnDParser.SEP - 31)) | (1 << (DnDParser.NUMBER - 31)) | (1 << (DnDParser.TEXT - 31)))) !== 0));
        this.state = 76;
        this.match(DnDParser.EOF);
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
    this.ruleIndex = DnDParser.RULE_hdr;
    return this;
}

HdrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HdrContext.prototype.constructor = HdrContext;

HdrContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DnDParser.SEP);
    } else {
        return this.getToken(DnDParser.SEP, i);
    }
};


HdrContext.prototype.NEWLINE = function() {
    return this.getToken(DnDParser.NEWLINE, 0);
};

HdrContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterHdr(this);
	}
};

HdrContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitHdr(this);
	}
};

HdrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitHdr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.HdrContext = HdrContext;

DnDParser.prototype.hdr = function() {

    var localctx = new HdrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DnDParser.RULE_hdr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(DnDParser.T__0);
        this.state = 79;
        this.match(DnDParser.SEP);
        this.state = 80;
        this.match(DnDParser.T__1);
        this.state = 81;
        this.match(DnDParser.SEP);
        this.state = 82;
        this.match(DnDParser.T__2);
        this.state = 83;
        this.match(DnDParser.SEP);
        this.state = 84;
        this.match(DnDParser.T__3);
        this.state = 85;
        this.match(DnDParser.SEP);
        this.state = 86;
        this.match(DnDParser.T__4);
        this.state = 87;
        this.match(DnDParser.SEP);
        this.state = 88;
        this.match(DnDParser.T__5);
        this.state = 89;
        this.match(DnDParser.SEP);
        this.state = 90;
        this.match(DnDParser.T__6);
        this.state = 91;
        this.match(DnDParser.SEP);
        this.state = 92;
        this.match(DnDParser.T__7);
        this.state = 93;
        this.match(DnDParser.SEP);
        this.state = 94;
        this.match(DnDParser.T__8);
        this.state = 95;
        this.match(DnDParser.SEP);
        this.state = 96;
        this.match(DnDParser.T__9);
        this.state = 97;
        this.match(DnDParser.SEP);
        this.state = 98;
        this.match(DnDParser.T__10);
        this.state = 99;
        this.match(DnDParser.SEP);
        this.state = 100;
        this.match(DnDParser.T__11);
        this.state = 101;
        this.match(DnDParser.SEP);
        this.state = 102;
        this.match(DnDParser.T__12);
        this.state = 103;
        this.match(DnDParser.SEP);
        this.state = 104;
        this.match(DnDParser.T__13);
        this.state = 105;
        this.match(DnDParser.SEP);
        this.state = 106;
        this.match(DnDParser.T__14);
        this.state = 107;
        this.match(DnDParser.SEP);
        this.state = 108;
        this.match(DnDParser.T__15);
        this.state = 109;
        this.match(DnDParser.SEP);
        this.state = 110;
        this.match(DnDParser.T__16);
        this.state = 111;
        this.match(DnDParser.SEP);
        this.state = 112;
        this.match(DnDParser.T__17);
        this.state = 113;
        this.match(DnDParser.SEP);
        this.state = 114;
        this.match(DnDParser.T__18);
        this.state = 115;
        this.match(DnDParser.SEP);
        this.state = 116;
        this.match(DnDParser.T__19);
        this.state = 117;
        this.match(DnDParser.SEP);
        this.state = 118;
        this.match(DnDParser.T__20);
        this.state = 119;
        this.match(DnDParser.SEP);
        this.state = 120;
        this.match(DnDParser.T__21);
        this.state = 121;
        this.match(DnDParser.SEP);
        this.state = 122;
        this.match(DnDParser.T__22);
        this.state = 123;
        this.match(DnDParser.SEP);
        this.state = 124;
        this.match(DnDParser.T__23);
        this.state = 125;
        this.match(DnDParser.SEP);
        this.state = 126;
        this.match(DnDParser.T__24);
        this.state = 127;
        this.match(DnDParser.SEP);
        this.state = 128;
        this.match(DnDParser.T__25);
        this.state = 129;
        this.match(DnDParser.SEP);
        this.state = 130;
        this.match(DnDParser.T__26);
        this.state = 131;
        this.match(DnDParser.SEP);
        this.state = 132;
        this.match(DnDParser.T__27);
        this.state = 133;
        this.match(DnDParser.SEP);
        this.state = 134;
        this.match(DnDParser.T__28);
        this.state = 135;
        this.match(DnDParser.NEWLINE);
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
    this.ruleIndex = DnDParser.RULE_row;
    return this;
}

RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RowContext.prototype.constructor = RowContext;

RowContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RowContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DnDParser.SEP);
    } else {
        return this.getToken(DnDParser.SEP, i);
    }
};


RowContext.prototype.race = function() {
    return this.getTypedRuleContext(RaceContext,0);
};

RowContext.prototype.background = function() {
    return this.getTypedRuleContext(BackgroundContext,0);
};

RowContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

RowContext.prototype.fclass = function() {
    return this.getTypedRuleContext(FclassContext,0);
};

RowContext.prototype.justClass = function() {
    return this.getTypedRuleContext(JustClassContext,0);
};

RowContext.prototype.subclass = function() {
    return this.getTypedRuleContext(SubclassContext,0);
};

RowContext.prototype.level = function() {
    return this.getTypedRuleContext(LevelContext,0);
};

RowContext.prototype.feats = function() {
    return this.getTypedRuleContext(FeatsContext,0);
};

RowContext.prototype.hP = function() {
    return this.getTypedRuleContext(HPContext,0);
};

RowContext.prototype.aC = function() {
    return this.getTypedRuleContext(ACContext,0);
};

RowContext.prototype.str = function() {
    return this.getTypedRuleContext(StrContext,0);
};

RowContext.prototype.dex = function() {
    return this.getTypedRuleContext(DexContext,0);
};

RowContext.prototype.con = function() {
    return this.getTypedRuleContext(ConContext,0);
};

RowContext.prototype.fint = function() {
    return this.getTypedRuleContext(FintContext,0);
};

RowContext.prototype.wis = function() {
    return this.getTypedRuleContext(WisContext,0);
};

RowContext.prototype.cha = function() {
    return this.getTypedRuleContext(ChaContext,0);
};

RowContext.prototype.alignment = function() {
    return this.getTypedRuleContext(AlignmentContext,0);
};

RowContext.prototype.skills = function() {
    return this.getTypedRuleContext(SkillsContext,0);
};

RowContext.prototype.weapons = function() {
    return this.getTypedRuleContext(WeaponsContext,0);
};

RowContext.prototype.spells = function() {
    return this.getTypedRuleContext(SpellsContext,0);
};

RowContext.prototype.day = function() {
    return this.getTypedRuleContext(DayContext,0);
};

RowContext.prototype.processedAlignment = function() {
    return this.getTypedRuleContext(ProcessedAlignmentContext,0);
};

RowContext.prototype.good = function() {
    return this.getTypedRuleContext(GoodContext,0);
};

RowContext.prototype.lawful = function() {
    return this.getTypedRuleContext(LawfulContext,0);
};

RowContext.prototype.processedRace = function() {
    return this.getTypedRuleContext(ProcessedRaceContext,0);
};

RowContext.prototype.processedSpells = function() {
    return this.getTypedRuleContext(ProcessedSpellsContext,0);
};

RowContext.prototype.processedWeapons = function() {
    return this.getTypedRuleContext(ProcessedWeaponsContext,0);
};

RowContext.prototype.levelGroup = function() {
    return this.getTypedRuleContext(LevelGroupContext,0);
};

RowContext.prototype.NEWLINE = function() {
    return this.getToken(DnDParser.NEWLINE, 0);
};

RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterRow(this);
	}
};

RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitRow(this);
	}
};

RowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.RowContext = RowContext;

DnDParser.prototype.row = function() {

    var localctx = new RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DnDParser.RULE_row);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.name();
        this.state = 138;
        this.match(DnDParser.SEP);
        this.state = 139;
        this.race();
        this.state = 140;
        this.match(DnDParser.SEP);
        this.state = 141;
        this.background();
        this.state = 142;
        this.match(DnDParser.SEP);
        this.state = 143;
        this.date();
        this.state = 144;
        this.match(DnDParser.SEP);
        this.state = 145;
        this.fclass();
        this.state = 146;
        this.match(DnDParser.SEP);
        this.state = 147;
        this.justClass();
        this.state = 148;
        this.match(DnDParser.SEP);
        this.state = 149;
        this.subclass();
        this.state = 150;
        this.match(DnDParser.SEP);
        this.state = 151;
        this.level();
        this.state = 152;
        this.match(DnDParser.SEP);
        this.state = 153;
        this.feats();
        this.state = 154;
        this.match(DnDParser.SEP);
        this.state = 155;
        this.hP();
        this.state = 156;
        this.match(DnDParser.SEP);
        this.state = 157;
        this.aC();
        this.state = 158;
        this.match(DnDParser.SEP);
        this.state = 159;
        this.str();
        this.state = 160;
        this.match(DnDParser.SEP);
        this.state = 161;
        this.dex();
        this.state = 162;
        this.match(DnDParser.SEP);
        this.state = 163;
        this.con();
        this.state = 164;
        this.match(DnDParser.SEP);
        this.state = 165;
        this.fint();
        this.state = 166;
        this.match(DnDParser.SEP);
        this.state = 167;
        this.wis();
        this.state = 168;
        this.match(DnDParser.SEP);
        this.state = 169;
        this.cha();
        this.state = 170;
        this.match(DnDParser.SEP);
        this.state = 171;
        this.alignment();
        this.state = 172;
        this.match(DnDParser.SEP);
        this.state = 173;
        this.skills();
        this.state = 174;
        this.match(DnDParser.SEP);
        this.state = 175;
        this.weapons();
        this.state = 176;
        this.match(DnDParser.SEP);
        this.state = 177;
        this.spells();
        this.state = 178;
        this.match(DnDParser.SEP);
        this.state = 179;
        this.day();
        this.state = 180;
        this.match(DnDParser.SEP);
        this.state = 181;
        this.processedAlignment();
        this.state = 182;
        this.match(DnDParser.SEP);
        this.state = 183;
        this.good();
        this.state = 184;
        this.match(DnDParser.SEP);
        this.state = 185;
        this.lawful();
        this.state = 186;
        this.match(DnDParser.SEP);
        this.state = 187;
        this.processedRace();
        this.state = 188;
        this.match(DnDParser.SEP);
        this.state = 189;
        this.processedSpells();
        this.state = 190;
        this.match(DnDParser.SEP);
        this.state = 191;
        this.processedWeapons();
        this.state = 192;
        this.match(DnDParser.SEP);
        this.state = 193;
        this.levelGroup();
        this.state = 194;
        this.match(DnDParser.NEWLINE);
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


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

NameContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.NameContext = NameContext;

DnDParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DnDParser.RULE_name);
    try {
        this.state = 198;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DnDParser.SEP:
        case DnDParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 196;
            this.field();
            break;
        case DnDParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 197;
            this.number();
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


function RaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_race;
    return this;
}

RaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RaceContext.prototype.constructor = RaceContext;

RaceContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

RaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterRace(this);
	}
};

RaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitRace(this);
	}
};

RaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitRace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.RaceContext = RaceContext;

DnDParser.prototype.race = function() {

    var localctx = new RaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DnDParser.RULE_race);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
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


function BackgroundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_background;
    return this;
}

BackgroundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BackgroundContext.prototype.constructor = BackgroundContext;

BackgroundContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

BackgroundContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterBackground(this);
	}
};

BackgroundContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitBackground(this);
	}
};

BackgroundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitBackground(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.BackgroundContext = BackgroundContext;

DnDParser.prototype.background = function() {

    var localctx = new BackgroundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DnDParser.RULE_background);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
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


function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitDate(this);
	}
};

DateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.DateContext = DateContext;

DnDParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DnDParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
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


function FclassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_fclass;
    return this;
}

FclassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FclassContext.prototype.constructor = FclassContext;

FclassContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

FclassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterFclass(this);
	}
};

FclassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitFclass(this);
	}
};

FclassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitFclass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.FclassContext = FclassContext;

DnDParser.prototype.fclass = function() {

    var localctx = new FclassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DnDParser.RULE_fclass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.field_list();
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


function JustClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_justClass;
    return this;
}

JustClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JustClassContext.prototype.constructor = JustClassContext;

JustClassContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

JustClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterJustClass(this);
	}
};

JustClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitJustClass(this);
	}
};

JustClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitJustClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.JustClassContext = JustClassContext;

DnDParser.prototype.justClass = function() {

    var localctx = new JustClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DnDParser.RULE_justClass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.field_list();
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


function SubclassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_subclass;
    return this;
}

SubclassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubclassContext.prototype.constructor = SubclassContext;

SubclassContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

SubclassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterSubclass(this);
	}
};

SubclassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitSubclass(this);
	}
};

SubclassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitSubclass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.SubclassContext = SubclassContext;

DnDParser.prototype.subclass = function() {

    var localctx = new SubclassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DnDParser.RULE_subclass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.field_list();
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


function LevelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_level;
    return this;
}

LevelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LevelContext.prototype.constructor = LevelContext;

LevelContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

LevelContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterLevel(this);
	}
};

LevelContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitLevel(this);
	}
};

LevelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitLevel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.LevelContext = LevelContext;

DnDParser.prototype.level = function() {

    var localctx = new LevelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DnDParser.RULE_level);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.number();
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


function FeatsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_feats;
    return this;
}

FeatsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatsContext.prototype.constructor = FeatsContext;

FeatsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

FeatsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterFeats(this);
	}
};

FeatsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitFeats(this);
	}
};

FeatsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitFeats(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.FeatsContext = FeatsContext;

DnDParser.prototype.feats = function() {

    var localctx = new FeatsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, DnDParser.RULE_feats);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.field_list();
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


function HPContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_hP;
    return this;
}

HPContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HPContext.prototype.constructor = HPContext;

HPContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

HPContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterHP(this);
	}
};

HPContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitHP(this);
	}
};

HPContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitHP(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.HPContext = HPContext;

DnDParser.prototype.hP = function() {

    var localctx = new HPContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, DnDParser.RULE_hP);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.number();
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


function ACContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_aC;
    return this;
}

ACContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ACContext.prototype.constructor = ACContext;

ACContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ACContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterAC(this);
	}
};

ACContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitAC(this);
	}
};

ACContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitAC(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ACContext = ACContext;

DnDParser.prototype.aC = function() {

    var localctx = new ACContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DnDParser.RULE_aC);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.number();
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


function StrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_str;
    return this;
}

StrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrContext.prototype.constructor = StrContext;

StrContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

StrContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterStr(this);
	}
};

StrContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitStr(this);
	}
};

StrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitStr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.StrContext = StrContext;

DnDParser.prototype.str = function() {

    var localctx = new StrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, DnDParser.RULE_str);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.number();
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


function DexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_dex;
    return this;
}

DexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DexContext.prototype.constructor = DexContext;

DexContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

DexContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterDex(this);
	}
};

DexContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitDex(this);
	}
};

DexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitDex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.DexContext = DexContext;

DnDParser.prototype.dex = function() {

    var localctx = new DexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, DnDParser.RULE_dex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.number();
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


function ConContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_con;
    return this;
}

ConContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConContext.prototype.constructor = ConContext;

ConContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ConContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterCon(this);
	}
};

ConContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitCon(this);
	}
};

ConContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitCon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ConContext = ConContext;

DnDParser.prototype.con = function() {

    var localctx = new ConContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, DnDParser.RULE_con);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.number();
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


function FintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_fint;
    return this;
}

FintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FintContext.prototype.constructor = FintContext;

FintContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

FintContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterFint(this);
	}
};

FintContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitFint(this);
	}
};

FintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitFint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.FintContext = FintContext;

DnDParser.prototype.fint = function() {

    var localctx = new FintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, DnDParser.RULE_fint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.number();
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


function WisContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_wis;
    return this;
}

WisContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WisContext.prototype.constructor = WisContext;

WisContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

WisContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterWis(this);
	}
};

WisContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitWis(this);
	}
};

WisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitWis(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.WisContext = WisContext;

DnDParser.prototype.wis = function() {

    var localctx = new WisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, DnDParser.RULE_wis);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.number();
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


function ChaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_cha;
    return this;
}

ChaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChaContext.prototype.constructor = ChaContext;

ChaContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ChaContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterCha(this);
	}
};

ChaContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitCha(this);
	}
};

ChaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitCha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ChaContext = ChaContext;

DnDParser.prototype.cha = function() {

    var localctx = new ChaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, DnDParser.RULE_cha);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.number();
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


function AlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_alignment;
    return this;
}

AlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlignmentContext.prototype.constructor = AlignmentContext;

AlignmentContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

AlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterAlignment(this);
	}
};

AlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitAlignment(this);
	}
};

AlignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitAlignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.AlignmentContext = AlignmentContext;

DnDParser.prototype.alignment = function() {

    var localctx = new AlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, DnDParser.RULE_alignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
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


function SkillsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_skills;
    return this;
}

SkillsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkillsContext.prototype.constructor = SkillsContext;

SkillsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

SkillsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterSkills(this);
	}
};

SkillsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitSkills(this);
	}
};

SkillsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitSkills(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.SkillsContext = SkillsContext;

DnDParser.prototype.skills = function() {

    var localctx = new SkillsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, DnDParser.RULE_skills);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.field_list();
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


function WeaponsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_weapons;
    return this;
}

WeaponsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WeaponsContext.prototype.constructor = WeaponsContext;

WeaponsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

WeaponsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterWeapons(this);
	}
};

WeaponsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitWeapons(this);
	}
};

WeaponsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitWeapons(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.WeaponsContext = WeaponsContext;

DnDParser.prototype.weapons = function() {

    var localctx = new WeaponsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, DnDParser.RULE_weapons);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.field_list();
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


function SpellsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_spells;
    return this;
}

SpellsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpellsContext.prototype.constructor = SpellsContext;

SpellsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

SpellsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterSpells(this);
	}
};

SpellsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitSpells(this);
	}
};

SpellsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitSpells(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.SpellsContext = SpellsContext;

DnDParser.prototype.spells = function() {

    var localctx = new SpellsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, DnDParser.RULE_spells);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.field_list();
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


function DayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_day;
    return this;
}

DayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DayContext.prototype.constructor = DayContext;

DayContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

DayContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterDay(this);
	}
};

DayContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitDay(this);
	}
};

DayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitDay(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.DayContext = DayContext;

DnDParser.prototype.day = function() {

    var localctx = new DayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, DnDParser.RULE_day);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
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


function ProcessedAlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_processedAlignment;
    return this;
}

ProcessedAlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedAlignmentContext.prototype.constructor = ProcessedAlignmentContext;

ProcessedAlignmentContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ProcessedAlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterProcessedAlignment(this);
	}
};

ProcessedAlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitProcessedAlignment(this);
	}
};

ProcessedAlignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitProcessedAlignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ProcessedAlignmentContext = ProcessedAlignmentContext;

DnDParser.prototype.processedAlignment = function() {

    var localctx = new ProcessedAlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, DnDParser.RULE_processedAlignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
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


function GoodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_good;
    return this;
}

GoodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GoodContext.prototype.constructor = GoodContext;

GoodContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

GoodContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterGood(this);
	}
};

GoodContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitGood(this);
	}
};

GoodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitGood(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.GoodContext = GoodContext;

DnDParser.prototype.good = function() {

    var localctx = new GoodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, DnDParser.RULE_good);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
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


function LawfulContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_lawful;
    return this;
}

LawfulContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LawfulContext.prototype.constructor = LawfulContext;

LawfulContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

LawfulContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterLawful(this);
	}
};

LawfulContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitLawful(this);
	}
};

LawfulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitLawful(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.LawfulContext = LawfulContext;

DnDParser.prototype.lawful = function() {

    var localctx = new LawfulContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, DnDParser.RULE_lawful);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
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


function ProcessedRaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_processedRace;
    return this;
}

ProcessedRaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedRaceContext.prototype.constructor = ProcessedRaceContext;

ProcessedRaceContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ProcessedRaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterProcessedRace(this);
	}
};

ProcessedRaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitProcessedRace(this);
	}
};

ProcessedRaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitProcessedRace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ProcessedRaceContext = ProcessedRaceContext;

DnDParser.prototype.processedRace = function() {

    var localctx = new ProcessedRaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, DnDParser.RULE_processedRace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
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


function ProcessedSpellsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_processedSpells;
    return this;
}

ProcessedSpellsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedSpellsContext.prototype.constructor = ProcessedSpellsContext;

ProcessedSpellsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

ProcessedSpellsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterProcessedSpells(this);
	}
};

ProcessedSpellsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitProcessedSpells(this);
	}
};

ProcessedSpellsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitProcessedSpells(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ProcessedSpellsContext = ProcessedSpellsContext;

DnDParser.prototype.processedSpells = function() {

    var localctx = new ProcessedSpellsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, DnDParser.RULE_processedSpells);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.field_list();
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


function ProcessedWeaponsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_processedWeapons;
    return this;
}

ProcessedWeaponsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedWeaponsContext.prototype.constructor = ProcessedWeaponsContext;

ProcessedWeaponsContext.prototype.field_list = function() {
    return this.getTypedRuleContext(Field_listContext,0);
};

ProcessedWeaponsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterProcessedWeapons(this);
	}
};

ProcessedWeaponsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitProcessedWeapons(this);
	}
};

ProcessedWeaponsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitProcessedWeapons(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.ProcessedWeaponsContext = ProcessedWeaponsContext;

DnDParser.prototype.processedWeapons = function() {

    var localctx = new ProcessedWeaponsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, DnDParser.RULE_processedWeapons);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.field_list();
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


function LevelGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_levelGroup;
    return this;
}

LevelGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LevelGroupContext.prototype.constructor = LevelGroupContext;

LevelGroupContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

LevelGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterLevelGroup(this);
	}
};

LevelGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitLevelGroup(this);
	}
};

LevelGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitLevelGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.LevelGroupContext = LevelGroupContext;

DnDParser.prototype.levelGroup = function() {

    var localctx = new LevelGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, DnDParser.RULE_levelGroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DnDParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.TEXT = function() {
    return this.getToken(DnDParser.TEXT, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.FieldContext = FieldContext;

DnDParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, DnDParser.RULE_field);
    try {
        this.state = 258;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DnDParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 256;
            this.match(DnDParser.TEXT);
            break;
        case DnDParser.SEP:
        case DnDParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);

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
    this.ruleIndex = DnDParser.RULE_field_list;
    return this;
}

Field_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_listContext.prototype.constructor = Field_listContext;

Field_listContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DnDParser.TEXT);
    } else {
        return this.getToken(DnDParser.TEXT, i);
    }
};


Field_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterField_list(this);
	}
};

Field_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitField_list(this);
	}
};

Field_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitField_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.Field_listContext = Field_listContext;

DnDParser.prototype.field_list = function() {

    var localctx = new Field_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, DnDParser.RULE_field_list);
    var _la = 0; // Token type
    try {
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DnDParser.T__29) {
                this.state = 260;
                this.match(DnDParser.T__29);
            }

            this.state = 263;
            this.match(DnDParser.TEXT);
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DnDParser.T__29) {
                this.state = 264;
                this.match(DnDParser.T__29);
                this.state = 266;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===DnDParser.TEXT) {
                    this.state = 265;
                    this.match(DnDParser.TEXT);
                }

                this.state = 272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 273;
            this.match(DnDParser.T__29);
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
    this.ruleIndex = DnDParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(DnDParser.NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof DnDListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DnDVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DnDParser.NumberContext = NumberContext;

DnDParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, DnDParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(DnDParser.NUMBER);
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


exports.DnDParser = DnDParser;
