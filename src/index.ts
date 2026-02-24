import { CharStream, CommonTokenStream } from "antlr4ng";
import { FormulaLexer } from "./generated/FormulaLexer";
import { FormulaParser } from "./generated/FormulaParser";
import { FormulaVisitorImpl } from "./FormulaVisitorImpl";

const input = `
a = 10
b = 20
SUM(a, b, 30) + AVG(10, 20)
`;

const chars = CharStream.fromString(input);
const lexer = new FormulaLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new FormulaParser(tokens);

const tree = parser.program();
const visitor = new FormulaVisitorImpl();

let result = 0;

for (const stmt of tree.statement()) {
  result = visitor.visit(stmt)!;
}

console.log("Result:", result); // 75
