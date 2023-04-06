function findNthFibonacci(n: number): number {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}
const fibb = findNthFibonacci(6);
console.log("fibb:", fibb);
