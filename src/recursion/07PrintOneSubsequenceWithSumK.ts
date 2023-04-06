(() => {
  function printOneSubsequenceWithSumK(
    arr: number[],
    index: number,
    sum: number,
    K: number,
    subsequence: number[]
  ): boolean {
    if (index >= arr.length) {
      if (sum === K) {
        console.log(subsequence);
        return true;
      }

      return false;
    }

    subsequence.push(arr[index]);
    if (
      printOneSubsequenceWithSumK(
        arr,
        index + 1,
        sum + arr[index],
        K,
        subsequence
      )
    ) {
      return true;
    }
    subsequence.pop();
    if (printOneSubsequenceWithSumK(arr, index + 1, sum, K, subsequence))
      return true;

    return false;
  }

  printOneSubsequenceWithSumK([1, 2, 1], 0, 0, 2, []);
})();
