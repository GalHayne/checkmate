const ROW = 8;
const COLUM = 8;

let sheet = ["black", "white"];

let flag = 0;

var matrix = [];
for (var i = 0; i < ROW; i++) {
  matrix[i] = [];
  for (var j = 0; j < COLUM; j++) {
    matrix[i][j] = sheet[flag];
    flag = 1 - flag;
  }
  console.log(matrix[i]);
  flag = 1 - flag;
}
