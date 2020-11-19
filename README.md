# Sudoku

Generate and solve Sudokus

# Getting Started

Quick guide on how to use the package

## Create your Sudoku Game

Install the NPM package

```bash
npm install game-sudoku
```

Import Sudoku to your project and create a new Game (ES6 module syntax):

```typescript
import { Sudoku } from "game-sudoku";
const sudoku = new Sudoku();
```

... or using CommonJS syntax:

```
const { Sudoku } = require('game-sudoku')
const sudoku = new Sudoku()
```

Use your own template (see examples below):

```typescript
const easyLayout: number[][] = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0]
];

let mediumLayout: number[][] = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const hardLayout: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9]
];

sudoku.generate(hardLayout);
```

## Play your Sudoku

Get the Board:

```typescript
var grid = sudoku.grid;
```

... or log() it on the command line:

```typescript
sudoku.grid.log()();
// · · · · · · · · ·
// · · · · · 3 · 8 5
// · · 1 · 2 · · · ·
// · · · 5 · 7 · · ·
// · · 4 · · · 1 · ·
// · 9 · · · · · · ·
// 5 · · · · · · 7 3
// · · 2 · 1 · · · ·
// · · · · 4 · · · 9
```

Write it down digits:

```typescript
let row: number = 2;
let column: number = 4;
let digit: number = 1;

sudoku.writeCell(row, column, digit);

sudoku.grid.log()();
// · · · · · · · · ·
// · · · 1 · 3 · 8 5
// · · 1 · 2 · · · ·
// · · · 5 · 7 · · ·
// · · 4 · · · 1 · ·
// · 9 · · · · · · ·
// 5 · · · · · · 7 3
// · · 2 · 1 · · · ·
// · · · · 4 · · · 9
```

... or erase them:

```typescript
let row: number = 2;
let column: number = 4;

sudoku.eraseCell(row, column);

sudoku.grid.log()();
// · · · · · · · · ·
// · · · · · 3 · 8 5
// · · 1 · 2 · · · ·
// · · · 5 · 7 · · ·
// · · 4 · · · 1 · ·
// · 9 · · · · · · ·
// 5 · · · · · · 7 3
// · · 2 · 1 · · · ·
// · · · · 4 · · · 9
```

## Solve the Game

You can get Hints:

```typescript
sudoku.solve("one").grid.log()();
// · · · · · · · · ·
// · · · 1 · 3 · 8 5
// · · 1 · 2 · · · ·
// · · · 5 · 7 · · ·
// · · 4 · · · 1 · ·
// · 9 · · · · · · ·
// 5 · · · · · · 7 3
// · · 2 · 1 · · · ·
// · · · · 4 · · · 9
```

Or solve the entire game:

```typescript
sudoku.solve("all").grid.log()();
// 9 8 7 6 5 4 3 2 1
// 2 4 6 1 7 3 9 8 5
// 3 5 1 9 2 8 7 4 6
// 1 2 8 5 3 7 6 9 4
// 6 3 4 8 9 2 1 5 7
// 7 9 5 4 6 1 8 3 2
// 5 1 9 2 8 6 4 7 3
// 4 7 2 3 1 9 5 6 8
// 8 6 3 7 4 5 2 1 9
```

## Reset the Game

Get back to the initial state:

```typescript
sudoku.reset().grid.log()();
// · · · · · · · · ·
// · · · · · 3 · 8 5
// · · 1 · 2 · · · ·
// · · · 5 · 7 · · ·
// · · 4 · · · 1 · ·
// · 9 · · · · · · ·
// 5 · · · · · · 7 3
// · · 2 · 1 · · · ·
// · · · · 4 · · · 9
```

# Coming next

This is the list of upcoming features:

- v1 - Sudoku Solver => Increase test coverage to stabilise and release
- v2 - Sudoku Generator => Generate games without a given layout
- v3 - Deliver the ability to write candidates/marks in the cell
