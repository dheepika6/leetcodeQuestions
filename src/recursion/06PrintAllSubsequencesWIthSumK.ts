(() => {
  function printAllSubsequenceWithSumK(
    arr: number[],
    index: number,
    sum: number,
    K: number,
    subsequence: number[]
  ) {
    if (index >= arr.length) {
      if (sum === K) {
        console.log(subsequence);
        return;
      }

      return;
    }

    subsequence.push(arr[index]);
    printAllSubsequenceWithSumK(
      arr,
      index + 1,
      sum + arr[index],
      K,
      subsequence
    );
    subsequence.pop();
    printAllSubsequenceWithSumK(arr, index + 1, sum, K, subsequence);
  }

  printAllSubsequenceWithSumK([1, 2, 3], 0, 0, 2, []);
})();
