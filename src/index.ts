/**
 * Create a function that takes a `gridSize` argument and returns a
 * "Multiplication Grid", starting at 1 and incrementing by 1 until reaching
 * the `gridSize` value.
 * @see https://en.wikipedia.org/wiki/Grid_method_multiplication
 *
 * @note Values in a given column should all be right-aligned.
 *
 * @example
 * // Create a 5x5 Multiplication Grid
 * createMultiplicationGrid(5);
 * // Would generate the output
 * `1  2  3  4  5
 * 2  4  6  8 10
 * 3  6  9 12 15
 * 4  8 12 16 20
 * 5 10 15 20 25`
 */

/**
 * Try and get as far as you can towards a solution. We are interested in
 * your problem-solving process, not necessarily the final result. 

 * @note Use the export and its name below as your starting point. It is
 * hooked up to a set of tests so you can track your progress towards the
 * final solution 😊
 * 
 * To view the testing panel click on the [Tests] tab in the right pane (next
 * to [Browser]).
 *
 * Good Luck, Have Fun 👍
 */

export const createMultiplicationGrid = (gridSize: number) => {
  let increaseOuter = 1;
  const arr: number[][] = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      arr[i][j] = increaseOuter * (j - 1);
      console.log(arr + " ");
    }
    console.log("\n");
    increaseOuter++;
  }
};
