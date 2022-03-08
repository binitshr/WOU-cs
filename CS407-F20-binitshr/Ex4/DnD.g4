grammar DnD;
// https://github.com/oganm/dndstats/blob/master/README.md#data-access
// Enumerate each column and parse the ones we want
// Uses a fixed number of columns

/* Parser Rules */

file        : hdr row+ EOF;

hdr         : 'name' SEP 'race' SEP 'background' SEP 'date' SEP 'class' SEP 'justClass' SEP 'subclass' SEP 'level' SEP 'feats' SEP 'HP' SEP 'AC' SEP 'Str' SEP 'Dex' SEP 'Con' SEP 'Int' SEP 'Wis' SEP 'Cha' SEP 'alignment' SEP 'skills' SEP 'weapons' SEP 'spells' SEP 'day' SEP 'processedAlignment' SEP 'good' SEP 'lawful' SEP 'processedRace' SEP 'processedSpells' SEP 'processedWeapons' SEP 'levelGroup' NEWLINE
            ;

row         : name SEP race SEP background SEP date SEP fclass SEP justClass SEP subclass SEP level SEP feats SEP hP SEP aC SEP str SEP dex SEP con SEP fint SEP wis SEP cha SEP alignment SEP skills SEP weapons SEP spells SEP day SEP processedAlignment SEP good SEP lawful SEP processedRace SEP processedSpells SEP processedWeapons SEP levelGroup NEWLINE
            ;

name                : field | number ;      // see if we can validate the name NOPE, needs help with a 0x or other identifier that it is a hex literal
race                : field ;
background          : field ;
date                : field ;
fclass              : field_list  ;      // changed class to fclass because the name conflicts with a keyword in Java
justClass           : field_list  ; 
subclass            : field_list  ; 
level               : number ;
feats               : field_list  ;
hP                  : number ;
aC                  : number ;
str                 : number ;
dex                 : number ;
con                 : number ;
fint                : number ;      // same here int to fint
wis                 : number ;
cha                 : number ;
alignment           : field ;
skills              : field_list ;
weapons             : field_list  ;
spells              : field_list  ;
day                 : field ;
processedAlignment  : field ;
good                : field ;
lawful              : field ;
processedRace       : field ;
processedSpells     : field_list ;
processedWeapons    : field_list ;
levelGroup          : field ;

field       : TEXT
            |
            ;

field_list  : '|'? TEXT ('|' TEXT?)*         // at least once there is a trailing '|' and a leading '|'
            | '|'                            // and several that only have a '|' and no text!!
            |
            ;

number      : NUMBER ;
//goodness    : TEXT ; //'N' | 'NA' | 'G' | 'E' ;  // conflicts with values in alignment so just go with TEXT rather than trying to parse it as fixed values
//lawfulness  : TEXT ; //'C' | 'NA' | 'N' | 'L' ;

/* Lexer Rules */

SEP         : '\t' ;
NEWLINE     : '\r'? '\n' ;
NUMBER      : '-'? [0-9]+ ;
TEXT        : ~[\t\r\n|]+ ;   // whitespace will be included with the TEXT
