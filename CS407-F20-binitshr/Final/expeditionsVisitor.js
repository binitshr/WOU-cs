// Generated from expeditions.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by expeditionsParser.

function expeditionsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

expeditionsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
expeditionsVisitor.prototype.constructor = expeditionsVisitor;

// Visit a parse tree produced by expeditionsParser#file.
expeditionsVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#hdr.
expeditionsVisitor.prototype.visitHdr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#row.
expeditionsVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#expedition_id.
expeditionsVisitor.prototype.visitExpedition_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#peak_id.
expeditionsVisitor.prototype.visitPeak_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#peak_name.
expeditionsVisitor.prototype.visitPeak_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#year.
expeditionsVisitor.prototype.visitYear = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#season.
expeditionsVisitor.prototype.visitSeason = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#basecamp_date.
expeditionsVisitor.prototype.visitBasecamp_date = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#highpoint_date.
expeditionsVisitor.prototype.visitHighpoint_date = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#termination_date.
expeditionsVisitor.prototype.visitTermination_date = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#termination_reason.
expeditionsVisitor.prototype.visitTermination_reason = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#highpoint_meters.
expeditionsVisitor.prototype.visitHighpoint_meters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#members.
expeditionsVisitor.prototype.visitMembers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#member_deaths.
expeditionsVisitor.prototype.visitMember_deaths = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#hired_staff.
expeditionsVisitor.prototype.visitHired_staff = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#hired_staff_deaths.
expeditionsVisitor.prototype.visitHired_staff_deaths = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#oxygen_used.
expeditionsVisitor.prototype.visitOxygen_used = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#trekking_agency.
expeditionsVisitor.prototype.visitTrekking_agency = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#field.
expeditionsVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#field_list.
expeditionsVisitor.prototype.visitField_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#number.
expeditionsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expeditionsParser#info.
expeditionsVisitor.prototype.visitInfo = function(ctx) {
  return this.visitChildren(ctx);
};



exports.expeditionsVisitor = expeditionsVisitor;