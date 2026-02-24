
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { FormulaListener } from "./FormulaListener.js";
import { FormulaVisitor } from "./FormulaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class FormulaParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly NUMBER = 9;
    public static readonly ID = 10;
    public static readonly WS = 11;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_assignment = 2;
    public static readonly RULE_expression = 3;
    public static readonly RULE_functionCall = 4;
    public static readonly RULE_argList = 5;

    public static readonly literalNames = [
        null, "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'", "','"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, "NUMBER", 
        "ID", "WS"
    ];
    public static readonly ruleNames = [
        "program", "statement", "assignment", "expression", "functionCall", 
        "argList",
    ];

    public get grammarFileName(): string { return "Formula.g4"; }
    public get literalNames(): (string | null)[] { return FormulaParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return FormulaParser.symbolicNames; }
    public get ruleNames(): string[] { return FormulaParser.ruleNames; }
    public get serializedATN(): number[] { return FormulaParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, FormulaParser._ATN, FormulaParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, FormulaParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 15;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1600) !== 0)) {
                {
                {
                this.state = 12;
                this.statement();
                }
                }
                this.state = 17;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 18;
            this.match(FormulaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, FormulaParser.RULE_statement);
        try {
            this.state = 22;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 20;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 21;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 4, FormulaParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 24;
            this.match(FormulaParser.ID);
            this.state = 25;
            this.match(FormulaParser.T__0);
            this.state = 26;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, FormulaParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 36;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                localContext = new FuncCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 29;
                this.functionCall();
                }
                break;
            case 2:
                {
                localContext = new NumberExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 30;
                this.match(FormulaParser.NUMBER);
                }
                break;
            case 3:
                {
                localContext = new IdExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 31;
                this.match(FormulaParser.ID);
                }
                break;
            case 4:
                {
                localContext = new ParensExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 32;
                this.match(FormulaParser.T__5);
                this.state = 33;
                this.expression(0);
                this.state = 34;
                this.match(FormulaParser.T__6);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 46;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 44;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_expression);
                        this.state = 38;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 39;
                        (localContext as MulDivContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || _la === 3)) {
                            (localContext as MulDivContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 40;
                        this.expression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_expression);
                        this.state = 41;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 42;
                        (localContext as AddSubContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 5)) {
                            (localContext as AddSubContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 43;
                        this.expression(6);
                        }
                        break;
                    }
                    }
                }
                this.state = 48;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 8, FormulaParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 49;
            this.match(FormulaParser.ID);
            this.state = 50;
            this.match(FormulaParser.T__5);
            this.state = 52;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1600) !== 0)) {
                {
                this.state = 51;
                this.argList();
                }
            }

            this.state = 54;
            this.match(FormulaParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argList(): ArgListContext {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 10, FormulaParser.RULE_argList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.expression(0);
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 57;
                this.match(FormulaParser.T__7);
                this.state = 58;
                this.expression(0);
                }
                }
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 6);
        case 1:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,11,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,5,
        0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,2,1,2,1,2,
        1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,37,8,3,1,3,1,3,1,3,1,3,1,
        3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,4,3,4,53,8,4,1,4,1,4,
        1,5,1,5,1,5,5,5,60,8,5,10,5,12,5,63,9,5,1,5,0,1,6,6,0,2,4,6,8,10,
        0,2,1,0,2,3,1,0,4,5,67,0,15,1,0,0,0,2,22,1,0,0,0,4,24,1,0,0,0,6,
        36,1,0,0,0,8,49,1,0,0,0,10,56,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,
        0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,
        1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,23,3,4,2,0,21,23,3,6,3,0,22,
        20,1,0,0,0,22,21,1,0,0,0,23,3,1,0,0,0,24,25,5,10,0,0,25,26,5,1,0,
        0,26,27,3,6,3,0,27,5,1,0,0,0,28,29,6,3,-1,0,29,37,3,8,4,0,30,37,
        5,9,0,0,31,37,5,10,0,0,32,33,5,6,0,0,33,34,3,6,3,0,34,35,5,7,0,0,
        35,37,1,0,0,0,36,28,1,0,0,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,
        0,0,0,37,46,1,0,0,0,38,39,10,6,0,0,39,40,7,0,0,0,40,45,3,6,3,7,41,
        42,10,5,0,0,42,43,7,1,0,0,43,45,3,6,3,6,44,38,1,0,0,0,44,41,1,0,
        0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,
        1,0,0,0,49,50,5,10,0,0,50,52,5,6,0,0,51,53,3,10,5,0,52,51,1,0,0,
        0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,5,7,0,0,55,9,1,0,0,0,56,61,3,
        6,3,0,57,58,5,8,0,0,58,60,3,6,3,0,59,57,1,0,0,0,60,63,1,0,0,0,61,
        59,1,0,0,0,61,62,1,0,0,0,62,11,1,0,0,0,63,61,1,0,0,0,7,15,22,36,
        44,46,52,61
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FormulaParser.__ATN) {
            FormulaParser.__ATN = new antlr.ATNDeserializer().deserialize(FormulaParser._serializedATN);
        }

        return FormulaParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FormulaParser.literalNames, FormulaParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return FormulaParser.vocabulary;
    }

    private static readonly decisionsToDFA = FormulaParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_program;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_statement;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(FormulaParser.ID, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_assignment;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class FuncCallExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionCall(): FunctionCallContext {
        return this.getRuleContext(0, FunctionCallContext)!;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterFuncCallExpr) {
             listener.enterFuncCallExpr(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitFuncCallExpr) {
             listener.exitFuncCallExpr(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitFuncCallExpr) {
            return visitor.visitFuncCallExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NUMBER, 0)!;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterNumberExpr) {
             listener.enterNumberExpr(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitNumberExpr) {
             listener.exitNumberExpr(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitNumberExpr) {
            return visitor.visitNumberExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(FormulaParser.ID, 0)!;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterIdExpr) {
             listener.enterIdExpr(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitIdExpr) {
             listener.exitIdExpr(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitIdExpr) {
            return visitor.visitIdExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParensExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterParensExpr) {
             listener.enterParensExpr(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitParensExpr) {
             listener.exitParensExpr(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitParensExpr) {
            return visitor.visitParensExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivContext extends ExpressionContext {
    public _op?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterMulDiv) {
             listener.enterMulDiv(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitMulDiv) {
             listener.exitMulDiv(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitMulDiv) {
            return visitor.visitMulDiv(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSubContext extends ExpressionContext {
    public _op?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(FormulaParser.ID, 0)!;
    }
    public argList(): ArgListContext | null {
        return this.getRuleContext(0, ArgListContext);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_functionCall;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_argList;
    }
    public override enterRule(listener: FormulaListener): void {
        if(listener.enterArgList) {
             listener.enterArgList(this);
        }
    }
    public override exitRule(listener: FormulaListener): void {
        if(listener.exitArgList) {
             listener.exitArgList(this);
        }
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
