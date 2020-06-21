/**
 * @param {number} numRows
 * @return {number[][]}
 */

//  My solution

var generate = function (numRows) {
  let pt = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      pt[0] = [1];
    }
    if (i === 1) {
      pt[1] = [1, 1];
    }
    if (i > 1) {
      pt[i] = [1, 1];
      let counter = 1;
      for (let j = 0; j < pt[i - 1].length - 1; j++) {
        let sum = pt[i - 1][j] + pt[i - 1][j + 1];
        pt[i].splice(counter, 0, sum);
        counter++;
      }
    }
  }
  return pt;
};

// Better solution

var generate = function (numRows) {
  if (!numRows) return [];

  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }

  return triangle;
};
