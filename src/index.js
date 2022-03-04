
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
 let arr1 = [];
 let arr2 = [];

 if (matrix === undefined || NaN) return arr2;

 for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {

    let colInd = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
    if (i === []) return arr2;
     arr1.push(matrix[i][colInd]);
  }
}
return arr1 || arr2;
}
