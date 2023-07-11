
/* from Algorithms-JeffE */

let nofSolutions = 0;
function placeQueens(arr, r) {
  const n = arr.length;
  if (r == n) {
    console.log(arr);
    nofSolutions++;
  } else {
    // iterate columns 0 to n-1
    for (let j = 0; j < n; j++) {
      let legal = true;
      // iterate rows 0 to r-1
      for (let i = 0; i < r; i++) {
        /* 
         * check if queen in row i is in column j,
         * or if (r - i) == arr(i) - j
         * or in (r - i) == j - arr(i)
         */
        if ((arr[i] == j) || (arr[i] == j + r - i) || (arr[i] == j - r + i)) {
          legal = false;
        }
      }
      if (legal == true) {
        arr[r] = j;
        placeQueens(arr, r + 1);
      }
    }
  }
}

placeQueens(new Array(8), 0);

console.log("Number of solutions: " + nofSolutions + ".\n");
