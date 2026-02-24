
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./FormulaParser.js";
import { StatementContext } from "./FormulaParser.js";
import { AssignmentContext } from "./FormulaParser.js";
import { FuncCallExprContext } from "./FormulaParser.js";
import { NumberExprContext } from "./FormulaParser.js";
import { IdExprContext } from "./FormulaParser.js";
import { ParensExprContext } from "./FormulaParser.js";
import { MulDivContext } from "./FormulaParser.js";
import { AddSubContext } from "./FormulaParser.js";
import { FunctionCallContext } from "./FormulaParser.js";
import { ArgListContext } from "./FormulaParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FormulaParser`.
 */
export class FormulaListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `FormulaParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `FormulaParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `FormulaParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `FormulaParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `FormulaParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `FormulaParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `FuncCallExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterFuncCallExpr?: (ctx: FuncCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FuncCallExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitFuncCallExpr?: (ctx: FuncCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `NumberExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterNumberExpr?: (ctx: NumberExprContext) => void;
    /**
     * Exit a parse tree produced by the `NumberExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitNumberExpr?: (ctx: NumberExprContext) => void;
    /**
     * Enter a parse tree produced by the `IdExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Exit a parse tree produced by the `IdExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Enter a parse tree produced by the `ParensExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterParensExpr?: (ctx: ParensExprContext) => void;
    /**
     * Exit a parse tree produced by the `ParensExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitParensExpr?: (ctx: ParensExprContext) => void;
    /**
     * Enter a parse tree produced by the `MulDiv`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Exit a parse tree produced by the `MulDiv`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Enter a parse tree produced by the `AddSub`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by the `AddSub`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by `FormulaParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `FormulaParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `FormulaParser.argList`.
     * @param ctx the parse tree
     */
    enterArgList?: (ctx: ArgListContext) => void;
    /**
     * Exit a parse tree produced by `FormulaParser.argList`.
     * @param ctx the parse tree
     */
    exitArgList?: (ctx: ArgListContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

