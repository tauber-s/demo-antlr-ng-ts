
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FormulaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class FormulaVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `FormulaParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `FormulaParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `FormulaParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `FuncCallExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncCallExpr?: (ctx: FuncCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `NumberExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberExpr?: (ctx: NumberExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IdExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdExpr?: (ctx: IdExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ParensExpr`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParensExpr?: (ctx: ParensExprContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDiv`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDiv?: (ctx: MulDivContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSub`
     * labeled alternative in `FormulaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSub?: (ctx: AddSubContext) => Result;
    /**
     * Visit a parse tree produced by `FormulaParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `FormulaParser.argList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgList?: (ctx: ArgListContext) => Result;
}

