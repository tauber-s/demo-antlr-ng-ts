npx antlr-ng -Dlanguage=TypeScript -l -v -o src/generated Expr.g4
npx antlr-ng -Dlanguage=TypeScript -l -v -o src/generated src/Formula.g4

npx ts-node src/index.ts