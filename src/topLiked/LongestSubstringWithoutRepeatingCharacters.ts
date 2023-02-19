// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s: string): number {
  const hash = new Set<string>();
  let top = 0, maxlength = 0; 

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if(hash.has(c)) {
        while(top < i && s[top] !== c)
        {
            hash.delete(s[top]);
            top ++;
        }

        top = top + 1;
    }
    else hash.add(c);

    if(maxlength < i-top + 1)
    {
        maxlength = i-top + 1;
    }
  }

  return maxlength;
}

const res1 = lengthOfLongestSubstring("abcabcbb");
console.log("res1", res1);

const res2 = lengthOfLongestSubstring("bbbbb");
console.log("res2", res2);

const res3 = lengthOfLongestSubstring("tmmzuxt");
console.log("res3", res3);