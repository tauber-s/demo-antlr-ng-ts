import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4ng";
import { ExprLexer } from "./ExprLexer.js";
import { ExprParser } from "./ExprParser.js";
import { EvalListener } from "./EvalListener.js";

const input = "3 + 4 * 2";
const chars = CharStream.fromString(input);
const lexer = new ExprLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new ExprParser(tokens);

const tree = parser.prog();

const listener = new EvalListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log("Result:", listener.getResult());
