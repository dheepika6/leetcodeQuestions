/***
 * One Implementation
 */

// (() => {
//   function printAllSubsequence(
//     text: string,
//     index: number,
//     subsequence: string
//   ) {
//     if (index >= text.length) {
//       console.log(subsequence);
//       return;
//     }

//     printAllSubsequence(text, index + 1, subsequence + text[index]);
//     printAllSubsequence(text, index + 1, subsequence);
//   }

//   printAllSubsequence("abcd", 0, "");
// })();

/***
 * Another Implementation
 */

(() => {
  function printAllSubsequence(
    text: string,
    index: number,
    subsequence: string[]
  ) {
    if (index >= text.length) {
      console.log(subsequence);
      return;
    }

    subsequence.push(text[index]);
    printAllSubsequence(text, index + 1, subsequence);
    subsequence.pop();
    printAllSubsequence(text, index + 1, subsequence);
  }

  printAllSubsequence("abcd", 0, []);
})();
