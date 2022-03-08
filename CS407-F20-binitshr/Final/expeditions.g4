grammar expeditions;

/* Parser Rules */

file : hdr row+ EOF;

hdr: 'expedition_id' SEP 'peak_id' SEP 'peak_name' SEP 'year' SEP 'season' SEP 'basecamp_date' SEP 'highpoint_date' SEP 'termination_date' SEP 'termination_reason' SEP 'highpoint_meters' SEP 'members' SEP 'member_deaths' SEP 'hired_staff' SEP 'hired_staff_deaths' SEP 'oxygen_used' SEP 'trekking_agency' NEWLINE;

row: expedition_id SEP peak_id SEP peak_name SEP year SEP season SEP basecamp_date SEP highpoint_date SEP termination_date SEP termination_reason SEP highpoint_meters SEP members SEP member_deaths SEP hired_staff SEP hired_staff_deaths SEP oxygen_used SEP trekking_agency NEWLINE;

expedition_id : field; 
peak_id: field;
peak_name: field;
year: number | field;
season: field;
basecamp_date: field ;
highpoint_date: field;
termination_date : field;
termination_reason: field | info ;
highpoint_meters: number | field;
members: number | field;
member_deaths: number | field;
hired_staff: number | field;
hired_staff_deaths: number | field;
oxygen_used: field;
trekking_agency:field | info;


field
    :   TEXT
    |   STRING
    ;

field_list  : '|'? TEXT ('|' TEXT?)*       
            | '|'                           
            |
            ;
number      : NUMBER ;
info : INFO;
/* Lexer Rules */

SEP         : ',' ;
NEWLINE     : '\r'? '\n' ;
NUMBER      : '-'? [0-9]+ ;
TEXT        : ~[,\n\r"]+ ; 
INFO        : ~[,\n\r"]+ '(' ')' ; 
STRING : '"' ('""'|~'"')* '"' ;