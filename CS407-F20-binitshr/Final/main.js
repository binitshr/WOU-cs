const  antlr4 = require('antlr4/index');
const expeditionsLexer = require('./expeditionsLexer').expeditionsLexer;
const expedtionsParser = require('./expeditionsParser').expeditionsParser;
const CustomVisitor = require('./CustomVisitor').CustomVisitor;


let fs = require('fs');

//  to run:   node main.js uniqueTable.tsv out.json

let chars = antlr4.CharStreams.fromPathSync(process.argv[2],{encoding: 'utf8'});

let lexer = new expeditionsLexer(chars);

let tokens = new antlr4.CommonTokenStream(lexer);

let parser = new expedtionsParser(tokens);

parser.buildParseTrees = true;

let tree = parser.file();


let visitor = new CustomVisitor();
let output = visitor.visitFile(tree);


let outputFile = process.argv[3];

fs.writeFile(outputFile, output, (err) =>{
    if(err)
    {
        throw err;
    }
    else{console.log('Output written to the File');} 
    
});