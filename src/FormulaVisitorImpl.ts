import { AbstractParseTreeVisitor } from "antlr4ng";
import { FormulaVisitor } from "./generated/FormulaVisitor";
import {
  AddSubContext,
  MulDivContext,
  NumberExprContext,
  IdExprContext,
  AssignmentContext,
  FuncCallExprContext
} from "./generated/FormulaParser";

export class FormulaVisitorImpl extends AbstractParseTreeVisitor<number> implements FormulaVisitor<number> {
  private memory: Record<string, number> = {};
  protected defaultResult(): number {
    return 0;
  };
  protected aggregateResult(aggregate: number, nextResult: number): number {
    return nextResult;
  };

  visitAssignment(ctx: AssignmentContext): number {
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expression())!;
    this.memory[id] = value;
    return value;
  };

  visitNumberExpr(ctx: NumberExprContext): number {
    return parseFloat(ctx.NUMBER().getText());
  };

  visitIdExpr(ctx: IdExprContext): number {
    const id = ctx.ID().getText();
    if (!(id in this.memory))
      throw new Error(`Variable ${id} not defined`);
    return this.memory[id];
  };

  visitAddSub(ctx: AddSubContext): number {
    const left = this.visit(ctx.expression(0)!)!;
    const right = this.visit(ctx.expression(1)!)!;
    return ctx._op!.text === "+" ? left + right : left - right;
  };

  visitMulDiv(ctx: MulDivContext): number {
    const left = this.visit(ctx.expression(0)!)!;
    const right = this.visit(ctx.expression(1)!)!;
    return ctx._op!.text === "*" ? left * right : left / right;
  };

  visitFuncCallExpr(ctx: FuncCallExprContext): number {
    const name = ctx.functionCall().ID().getText().toUpperCase();
    const args = ctx.functionCall().argList()?.expression().map(e => this.visit(e!)!) ?? [];

    switch (name) {
      case "SUM":
        return args.reduce((a, b) => a + b, 0);
      case "AVG":
        return args.reduce((a, b) => a + b, 0) / args.length;
      default:
        throw new Error(`Function ${name} is not supported`);
    };
  };
};