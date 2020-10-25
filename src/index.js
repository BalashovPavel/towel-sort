
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix == null) {
    return []
  }

  return matrix.map((arr, index) => index % 2 === 0 ? arr : arr.reverse()).flat();
  
  
}
