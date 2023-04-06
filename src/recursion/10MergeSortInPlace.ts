(() => {
  function mergeSort(arr: number[], left: number, right: number): void {
    if (left === right) return;
    if (left > right) {
      return;
    }

    const mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    const merged: number[] = [];
    let lPointer = left;
    let rPointer = mid + 1;
    while (lPointer <= mid && rPointer <= right) {
      if (arr[lPointer] <= arr[rPointer]) {
        merged.push(arr[lPointer]);
        lPointer++;
      } else {
        merged.push(arr[rPointer]);
        rPointer++;
      }
    }

    while (rPointer <= right) {
      merged.push(arr[rPointer]);
      rPointer++;
    }
    while (lPointer <= mid) {
      merged.push(arr[lPointer]);
      lPointer++;
    }

    for (let i = left; i <= right; i++) {
      arr[i] = merged[i - left];
    }
  }

  const arr = [3, 5, 1, 6, 2, 7, 1];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
})();
