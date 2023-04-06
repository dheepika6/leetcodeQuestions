(() => {
  function mergeSort(arr: number[], left: number, right: number): number[] {
    if (left === right) return [arr[left]];
    if (left > right) {
      return [];
    }

    const mid = left + Math.floor((right - left) / 2);
    const leftArray = mergeSort(arr, left, mid);
    const rightArray = mergeSort(arr, mid + 1, right);

    const merged: number[] = [];
    let lPointer = 0;
    let rPointer = 0;
    while (lPointer < leftArray.length && rPointer < rightArray.length) {
      if (leftArray[lPointer] <= rightArray[rPointer]) {
        merged.push(leftArray[lPointer]);
        lPointer++;
      } else {
        merged.push(rightArray[rPointer]);
        rPointer++;
      }
    }

    while (rPointer < rightArray.length) {
      merged.push(rightArray[rPointer]);
      rPointer++;
    }
    while (lPointer < leftArray.length) {
      merged.push(leftArray[lPointer]);
      lPointer++;
    }

    return merged;
  }

  const arr = [3, 5, 1, 6, 2, 7, 1];
  const sortedArray = mergeSort(arr, 0, arr.length - 1);
  console.log(sortedArray);
})();
