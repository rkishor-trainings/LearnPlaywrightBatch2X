// ============================================
// JavaScript Identifier Rules - Examples
// ============================================

// Rule 1: Can contain letters, digits, underscores, and dollar signs
let myVariable1;
let _privateVar;
let $jqueryStyle;
let var123;
let name_with_underscore;
let price$;

// Rule 2: Must begin with a letter, underscore, or dollar sign
let validName;
let _private;
let $element;
let ValidName;

// Rule 3: Cannot begin with a digit
// let 1stPlace;     // ❌ SyntaxError: Invalid or unexpected token
// let 123abc;       // ❌ SyntaxError: Invalid or unexpected token

// Rule 4: Case-sensitive
let myVar = 1;
let MyVar = 2;
let MYVAR = 3;
// myVar, MyVar, and MYVAR are three different identifiers

// Rule 5: Cannot be reserved keywords
// let var;          // ❌ SyntaxError: Unexpected token 'var'
// let function;     // ❌ SyntaxError: Unexpected token 'function'
// let class;        // ❌ SyntaxError: Unexpected reserved word
// let return;       // ❌ SyntaxError: Unexpected token 'return'
// let if;           // ❌ SyntaxError: Unexpected token 'if'
// let else;         // ❌ SyntaxError: Unexpected token 'else'
// let true;         // ❌ SyntaxError: Unexpected token 'true'
// let false;        // ❌ SyntaxError: Unexpected token 'false'
// let null;         // ❌ SyntaxError: Unexpected token 'null'
// let undefined;    // ❌ Not recommended (global property), but technically allowed in non-strict

// Rule 6: Cannot contain spaces or special characters (except _ and $)
// let my variable;  // ❌ SyntaxError: Unexpected identifier 'variable'
// let my-variable;  // ❌ SyntaxError: Unexpected token '-'
// let my@variable;  // ❌ SyntaxError: Invalid or unexpected token
// let my#variable;  // ❌ SyntaxError: Invalid or unexpected token
// let my!variable;  // ❌ SyntaxError: Invalid or unexpected token

// Rule 7: Unicode letters are allowed
let переменная;
let 変数;
let 변수;
let µ;
let Ω;
let π;
let _123;
let $123;
