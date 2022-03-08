// Generated from Http.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HttpParser.
function HttpListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HttpListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HttpListener.prototype.constructor = HttpListener;

// Enter a parse tree produced by HttpParser#message.
HttpListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by HttpParser#message.
HttpListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by HttpParser#start_line.
HttpListener.prototype.enterStart_line = function(ctx) {
};

// Exit a parse tree produced by HttpParser#start_line.
HttpListener.prototype.exitStart_line = function(ctx) {
};


// Enter a parse tree produced by HttpParser#request_line.
HttpListener.prototype.enterRequest_line = function(ctx) {
};

// Exit a parse tree produced by HttpParser#request_line.
HttpListener.prototype.exitRequest_line = function(ctx) {
};


// Enter a parse tree produced by HttpParser#status_line.
HttpListener.prototype.enterStatus_line = function(ctx) {
};

// Exit a parse tree produced by HttpParser#status_line.
HttpListener.prototype.exitStatus_line = function(ctx) {
};


// Enter a parse tree produced by HttpParser#header_field.
HttpListener.prototype.enterHeader_field = function(ctx) {
};

// Exit a parse tree produced by HttpParser#header_field.
HttpListener.prototype.exitHeader_field = function(ctx) {
};


// Enter a parse tree produced by HttpParser#method.
HttpListener.prototype.enterMethod = function(ctx) {
};

// Exit a parse tree produced by HttpParser#method.
HttpListener.prototype.exitMethod = function(ctx) {
};


// Enter a parse tree produced by HttpParser#request_target.
HttpListener.prototype.enterRequest_target = function(ctx) {
};

// Exit a parse tree produced by HttpParser#request_target.
HttpListener.prototype.exitRequest_target = function(ctx) {
};


// Enter a parse tree produced by HttpParser#http_version.
HttpListener.prototype.enterHttp_version = function(ctx) {
};

// Exit a parse tree produced by HttpParser#http_version.
HttpListener.prototype.exitHttp_version = function(ctx) {
};


// Enter a parse tree produced by HttpParser#status_code.
HttpListener.prototype.enterStatus_code = function(ctx) {
};

// Exit a parse tree produced by HttpParser#status_code.
HttpListener.prototype.exitStatus_code = function(ctx) {
};


// Enter a parse tree produced by HttpParser#reason_phrase.
HttpListener.prototype.enterReason_phrase = function(ctx) {
};

// Exit a parse tree produced by HttpParser#reason_phrase.
HttpListener.prototype.exitReason_phrase = function(ctx) {
};


// Enter a parse tree produced by HttpParser#field_name.
HttpListener.prototype.enterField_name = function(ctx) {
};

// Exit a parse tree produced by HttpParser#field_name.
HttpListener.prototype.exitField_name = function(ctx) {
};


// Enter a parse tree produced by HttpParser#field_value.
HttpListener.prototype.enterField_value = function(ctx) {
};

// Exit a parse tree produced by HttpParser#field_value.
HttpListener.prototype.exitField_value = function(ctx) {
};



exports.HttpListener = HttpListener;