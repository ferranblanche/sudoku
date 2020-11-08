# Sudoku

Generate and solve Sudokus

# Create your Sudoku Game

Install the NPM package

```bash
npm install @ferranblanche/sudoku
```

Import Sudoku to your project and create a new Game (ES6 module syntax):

```typescript
import { Sudoku } from "@ferranbx/sudoku";
const sudoku = new Sudoku();
```

... or using CommonJS syntax:

```
const { Sudoku } = require('@ferranbx/sudoku')
const sudoku = new Sudoku()
```

Use your own template:

```typescript
import { Sudoku } from "@ferranbx/sudoku";

let template = [
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

const sudoku = new Sudoku(template);
```

# Play your Sudoku

Get the Board:

```typescript
let board = sudoku.readBoard();
// Board: [
//    [5, 3, 0, 0, 7, 0, 0, 0, 0],
//    [6, 0, 0, 1, 9, 5, 0, 0, 0],
//    [0, 9, 8, 0, 0, 0, 0, 6, 0],
//    [8, 0, 0, 0, 6, 0, 0, 0, 3],
//    [4, 0, 0, 8, 0, 3, 0, 0, 1],
//    [7, 0, 0, 0, 2, 0, 0, 0, 6],
//    [0, 6, 0, 0, 0, 0, 2, 8, 0],
//    [0, 0, 0, 4, 1, 9, 0, 0, 5],
//    [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]
```

... or get it ready to print on the command line:

```typescript
console.log(sudoku.toString());
// -----------------
// 5 3     7
// 6     1 9 5
//   9 8         6
// 8       6       3
// 4     8   3     1
// 7       2       6
//   6         2 8
//       4 1 9     5
//         8     7 9
```

Get all blank cells:

```typescript
let blanks = sudoku.getBlanks();
// Blanks: [
//    {row: 0, col: 2},
//    {row: 0, col: 3},
//    {row: 0, col: 5},
//    {row: 0, col: 6},
//    {row: 0, col: 7},
//    {row: 0, col: 8},
//    ...
// ]
```

Test a number:

```typescript
let idea = { row: 1, col: 2, num: 5 };
let isGoodIdea = sudoku.validateNumber(idea);
// isGoodIdea: false
```

... and write it down:

```typescript
sudoku.writeNumber({ row: 1, col: 2, num: 2 });
let board = sudoku.readBoard();
// Board: [
//    [5, 3, 0, 0, 7, 0, 0, 0, 0],
//    [6, 0, 2, 1, 9, 5, 0, 0, 0],
//    [0, 9, 8, 0, 0, 0, 0, 6, 0],
//    [8, 0, 0, 0, 6, 0, 0, 0, 3],
//    [4, 0, 0, 8, 0, 3, 0, 0, 1],
//    [7, 0, 0, 0, 2, 0, 0, 0, 6],
//    [0, 6, 0, 0, 0, 0, 2, 8, 0],
//    [0, 0, 0, 4, 1, 9, 0, 0, 5],
//    [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]
```

... or erase it:

```typescript
sudoku.eraseNumber({ row: 1, col: 2 });
let board = sudoku.readBoard();
// Board: [
//    [5, 3, 0, 0, 7, 0, 0, 0, 0],
//    [6, 0, 0, 1, 9, 5, 0, 0, 0],
//    [0, 9, 8, 0, 0, 0, 0, 6, 0],
//    [8, 0, 0, 0, 6, 0, 0, 0, 3],
//    [4, 0, 0, 8, 0, 3, 0, 0, 1],
//    [7, 0, 0, 0, 2, 0, 0, 0, 6],
//    [0, 6, 0, 0, 0, 0, 2, 8, 0],
//    [0, 0, 0, 4, 1, 9, 0, 0, 5],
//    [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]
```

Add marks to game:

```typescript
let mark = { row: 0, col: 2, num: 2 };
sudoku.writeMark(mark);
```

Get all your marks:

```typescript
let marks = sudoku.readMarks();
// Marks: [
//    {row: 0, col: 2, num: 2}
// ]
```

Remove a mark:

```typescript
let mark = { row: 0, col: 2, num: 2 };
sudoku.ereaseMark(mark);
let marks = sudoku.readMarks();
// Marks: []
```

# Solve the Game

You can get Hints:

```typescript
let hint = sudoku.readHint();
// Hint: {row: 4, col: 4, num: 5}
```

Or solve the entire game:

```typescript
sudoku.resolve();
```
