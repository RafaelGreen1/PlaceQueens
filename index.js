
/* from Algorithms-JeffE */

let nofSolutions = 0;
function placeQueens(arr, r) {
  if (r == arr.length) {
    console.log(arr);
    nofSolutions++;
  } else {
    for (let j = 0; j < arr.length; j++) {
      let legal = true;
      for (let i = 0; i < r; i++) {
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
