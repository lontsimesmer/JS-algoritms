const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

function flippingMatrix(matrix) {
  let n = matrix.length / 2,
    total = 0,
    value = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      value = Number.MIN_VALUE;
      value = Math.max(matrix[i][j], value);
      value = Math.max(matrix[2 * n - 1 - i][j], value);
      value = Math.max(matrix[i][2 * n - 1 - j], value);
      value = Math.max(matrix[2 * n - 1 - i][2 * n - 1 - j], value);
      total += value;
    }
  }
  console.log(total);
}
flippingMatrix(matrix);

Link = `https://www.hackerrank.com/test/451qsk1c94n/questions/di1dm3kpigj`;
