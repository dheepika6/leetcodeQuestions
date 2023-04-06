(() => {
  function countSubsequenceWithSumK(
    arr: number[],
    K: number,
    index: number,
    sum: number,
    subsequence: number[]
  ): number {
    if (index == arr.length) {
      if (sum === K) {
        return 1;
      }
      return 0;
    }

    subsequence.push(arr[index]);
    const left = countSubsequenceWithSumK(
      arr,
      K,
      index + 1,
      sum + arr[index],
      subsequence
    );
    subsequence.pop();
    const right = countSubsequenceWithSumK(arr, K, index + 1, sum, subsequence);

    return left + right;
  }

  const count = countSubsequenceWithSumK([1, 2, 1], 2, 0, 0, []);
  console.log(count);
})();
