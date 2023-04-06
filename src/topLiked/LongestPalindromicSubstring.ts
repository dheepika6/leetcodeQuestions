// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// function longestPalindrome(s: string): string {
//   const hashMap: number[][] = new Array(s.length)
//     .fill(-1)
//     .map(() => new Array(s.length).fill(-1));
//   let maxString = "";

//   function getLongestPlaindrome(start: number, end: number) {
//     if (start < 0 || end >= s.length || hashMap[start][end] != -1) {
//       return;
//     }

//     let left,
//       right,
//       isPalindrome = true;

//     if ((end - start) % 2 === 1) {
//       left = Math.floor((end + start) / 2);
//       right = left + 1;
//     } else {
//       left = Math.floor((end + start) / 2) - 1;
//       right = left + 2;

//       if (end - start === 0) {
//         left = start;
//         right = start;
//       }
//     }

//     while (left >= 0 && right < s.length) {
//       if (s[left] !== s[right]) {
//         hashMap[left][right] = 0;
//         isPalindrome = false;
//         break;
//       }

//       hashMap[left][right] = right - left + 1;
//       if (maxString.length < right - left + 1) {
//         maxString = s.substring(left, right + 1);
//       }
//       left = left - 1;
//       right = right + 1;
//     }

//     getLongestPlaindrome(start, end + 1);
//     getLongestPlaindrome(end + 1, end + 1);
//   }

//   getLongestPlaindrome(0, 0);

//   return maxString;
// }

function longestPalindrome(s: string): string {
  const hashMap: number[][] = new Array(s.length)
    .fill(-1)
    .map(() => new Array(s.length).fill(-1));
  let maxString = "";

  for (let start = 0; start < s.length; start++) {
    for (let end = start; end < s.length; end++) {
      let left,
        right,
        isPalindrome = true;

      if (hashMap[start][end] != -1) continue;

      if ((end - start) % 2 === 1) {
        left = Math.floor((end + start) / 2);
        right = left + 1;
      } else {
        left = Math.floor((end + start) / 2) - 1;
        right = left + 2;

        if (end - start === 0) {
          left = start;
          right = start;
        }
      }

      while (left >= 0 && right < s.length && isPalindrome) {
        if (s[left] !== s[right]) {
          hashMap[left][right] = 0;
          isPalindrome = false;
          break;
        }

        hashMap[left][right] = right - left + 1;
        if (maxString.length < right - left + 1) {
          maxString = s.substring(left, right + 1);
        }
        left = left - 1;
        right = right + 1;
      }
    }
    // console.log(hashMap);
  }

  return maxString;
}

const inputs = ["babad", "cbbd", "a", "bb"];
// const inputs = ["abb"];
// const inputs = ["babad"];

for (let i = 0; i < inputs.length; i++) {
  const res = longestPalindrome(inputs[i]);
  console.log("res: ", res);
}
