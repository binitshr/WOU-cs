// Generated from DnD.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DnDParser.

function DnDVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DnDVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DnDVisitor.prototype.constructor = DnDVisitor;

// Visit a parse tree produced by DnDParser#file.
DnDVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#hdr.
DnDVisitor.prototype.visitHdr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#row.
DnDVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#name.
DnDVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#race.
DnDVisitor.prototype.visitRace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#background.
DnDVisitor.prototype.visitBackground = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#date.
DnDVisitor.prototype.visitDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#fclass.
DnDVisitor.prototype.visitFclass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#justClass.
DnDVisitor.prototype.visitJustClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#subclass.
DnDVisitor.prototype.visitSubclass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#level.
DnDVisitor.prototype.visitLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#feats.
DnDVisitor.prototype.visitFeats = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#hP.
DnDVisitor.prototype.visitHP = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#aC.
DnDVisitor.prototype.visitAC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#str.
DnDVisitor.prototype.visitStr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#dex.
DnDVisitor.prototype.visitDex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#con.
DnDVisitor.prototype.visitCon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#fint.
DnDVisitor.prototype.visitFint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#wis.
DnDVisitor.prototype.visitWis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#cha.
DnDVisitor.prototype.visitCha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#alignment.
DnDVisitor.prototype.visitAlignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#skills.
DnDVisitor.prototype.visitSkills = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#weapons.
DnDVisitor.prototype.visitWeapons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#spells.
DnDVisitor.prototype.visitSpells = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#day.
DnDVisitor.prototype.visitDay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#processedAlignment.
DnDVisitor.prototype.visitProcessedAlignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#good.
DnDVisitor.prototype.visitGood = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#lawful.
DnDVisitor.prototype.visitLawful = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#processedRace.
DnDVisitor.prototype.visitProcessedRace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#processedSpells.
DnDVisitor.prototype.visitProcessedSpells = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#processedWeapons.
DnDVisitor.prototype.visitProcessedWeapons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#levelGroup.
DnDVisitor.prototype.visitLevelGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#field.
DnDVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#field_list.
DnDVisitor.prototype.visitField_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DnDParser#number.
DnDVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DnDVisitor = DnDVisitor;