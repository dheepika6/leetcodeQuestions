// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a: number | null = null,
    b: number | null = null;
  const isOdd = (nums1.length + nums2.length) % 2 === 1;
  const maxMidIndex = Math.floor((nums1.length + nums2.length) / 2);
  let i1 = 0,
    i2 = 0;

  while ((i1 < nums1.length || i2 < nums2.length) && i1 + i2 <= maxMidIndex) {
    if (nums1[i1] <= nums2[i2] || i2 >= nums2.length) {
      a = b;
      b = nums1[i1];
      i1++;
    } else {
      a = b;
      b = nums2[i2];
      i2++;
    }
  }

  return isOdd ? b! : (a! + b!) / 2;
}

const res1: number = findMedianSortedArrays([1, 3], [2]);
console.log("res1", res1);

const res2: number = findMedianSortedArrays([1, 2], [3, 4]);
console.log("res2", res2);

const res3: number = findMedianSortedArrays([1, 7], [2, 4, 6, 8]);
console.log("res3", res3);

const res4: number = findMedianSortedArrays([2], []);
console.log("res4", res4);

export {};
