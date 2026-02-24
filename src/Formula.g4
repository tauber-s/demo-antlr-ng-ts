grammar Formula;

program: statement* EOF;

statement
    : assignment
    | expression
    ;

assignment
    : ID '=' expression
    ;

expression
    : expression op=('*'|'/') expression   # MulDiv
    | expression op=('+'|'-') expression   # AddSub
    | functionCall                         # FuncCallExpr
    | NUMBER                               # NumberExpr
    | ID                                   # IdExpr
    | '(' expression ')'                   # ParensExpr
    ;

functionCall
    : ID '(' argList? ')'
    ;

argList
    : expression (',' expression)*
    ;

NUMBER: [0-9]+ ('.' [0-9]+)?;
ID: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;