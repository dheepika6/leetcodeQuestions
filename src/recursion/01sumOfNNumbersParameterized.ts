function sumOfNNumbers(i: number, sum: number) {
  if (i < 1) {
    console.log("sum:", sum);
    return;
  }

  sumOfNNumbers(i - 1, sum + i);
}

sumOfNNumbers(3, 0);
