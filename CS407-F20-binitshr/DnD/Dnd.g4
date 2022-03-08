grammar Dnd;
/*Parser Rules */


file        : hdr row+ ;
hdr         : 'name' SEP 'race' SEP 'background' SEP 'date' SEP 'class' SEP 'justClass' SEP 'subclass' SEP 'level' SEP 'feats' SEP 'HP' SEP 'AC' SEP 'Str' SEP 'Dex' SEP 'Con' SEP 'Int' SEP 'Wis' SEP 'Cha' SEP 'alignment' SEP 'skills' SEP 'weapons' SEP 'spells' SEP 'day' SEP 'processedAlignment' SEP 'good' SEP 'lawful' SEP 'processedRace' SEP 'processedSpells' SEP 'processedWeapons' '\r'? '\n'
            ;

row         : name SEP race SEP background SEP date SEP fclass SEP justClass SEP subclass SEP level SEP feats SEP hP SEP aC SEP str SEP dex SEP con SEP fint SEP wis SEP cha SEP alignment SEP skills SEP weapons SEP spells SEP day SEP processedAlignment SEP good SEP lawful SEP processedRace SEP processedSpells SEP processedWeapons '\r'? '\n'
            ;
field : TEXT | ;
number: NUMBER;
field_list: '|' ('|' TEXT)*;



name: field | number ;
race : field;
background : field ;
date : field ;
fclass : field_list  ;      // changed class to fclass because the name conflicts with a keyword in Java
justClass : field_list  ; 
subclass : field_list  ; 
level : number ;
feats : field_list  ;
hP : number ;
aC : number ;
str : number ;
dex : number ;
con : number ;
fint : number ;    
wis : number ;
cha : number ;
alignment : field ;
skills : field_list ;
weapons : field_list  ;
spells : field_list  ;
day : field ;

processedAlignment  : field ;
good                : field ;
lawful              : field ;
processedRace       : field ;
processedSpells     : field_list ;
processedWeapons    : field_list ;
levelGroup          : field ;

/* Lexer Rules */

SEP         : '\t' ;
NEWLINE     : '\r' ? '\n' ; 
NUMBER: '-'? [0-9]+ ;
TEXT : [\t\r\n | ] +;