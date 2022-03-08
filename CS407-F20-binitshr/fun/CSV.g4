grammar CSV;

file : hdr row+ EOF;
hdr: 'expedition_id' SEP 'peak_id' SEP 'peak_name' SEP 'year' SEP 'season' SEP 'basecamp_date' SEP 'highpoint_date' SEP 'termination_date' SEP 'termination_reason' SEP 'highpoint_meters' SEP 'members' SEP 'member_deaths' SEP 'hired_staff' SEP 'hired_staff_deaths' SEP 'oxygen_used' SEP 'trekking_agency' NEWLINE
        ;

row: expedition_id SEP peak_id SEP peak_name SEP year SEP season SEP basecamp_date SEP highpoint_date SEP termination_date SEP termination_reason SEP highpoint_meters SEP members SEP members_deaths SEP hired_staff SEP hired_staff_deaths SEP oxygen_used SEP trekking_agency NEWLINE
        ;
expedition_id : field; 
peak_id: field;
peak_name: field;
year: number;
season: field;
basecamp_date: field;
highpoint_date: field;
termination_date : field;
termination_reason: field;
highpoint_meters: number;
members: number;
members_deaths: number;
hired_staff: number;
hired_staff_deaths: number;
oxygen_used: field;
trekking_agency:field;

field
    : TEXT
    | STRING
    |
    ;

number      : STRING;

SEP         : ',' ;
NEWLINE     : '\n';
TEXT        : ~[,\n\r"]+ ; 
STRING      : '"' ('""'|~'"')* '"' ;