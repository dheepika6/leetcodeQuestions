function sumOfNNumbersFunc(i: number): number {
  if (i < 1) {
    return 0;
  }

  const sum = i + sumOfNNumbersFunc(i - 1);
  return sum;
}

const sum = sumOfNNumbersFunc(3);
console.log(sum);
