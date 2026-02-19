import { ExprListener } from "./ExprListener.js";
import { ExprParser } from "./ExprParser.js";

export class EvalListener extends ExprListener {

  private stack: number[] = [];

  // INT
  exitInt(ctx: ExprParser.IntContext) {
    this.stack.push(parseInt(ctx.INT().text));
  }

  // Parentheses
  exitParens(ctx: ExprParser.ParensContext) {
    // nada especial, valor já está na stack
  }

  // Multiplication / Division
  exitMulDiv(ctx: ExprParser.MulDivContext) {
    const right = this.stack.pop()!;
    const left = this.stack.pop()!;

    if (ctx.op.text === "*") {
      this.stack.push(left * right);
    } else {
      this.stack.push(left / right);
    }
  }

  // Addition / Subtraction
  exitAddSub(ctx: ExprParser.AddSubContext) {
    const right = this.stack.pop()!;
    const left = this.stack.pop()!;

    if (ctx.op.text === "+") {
      this.stack.push(left + right);
    } else {
      this.stack.push(left - right);
    }
  }

  getResult(): number {
    return this.stack[0];
  }
}
