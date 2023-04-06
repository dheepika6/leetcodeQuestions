function checkForPalindrome(text: string, index: number): boolean {
  if (index >= Math.floor(text.length / 2)) {
    return true;
  }

  if (text[index] !== text[text.length - index - 1]) {
    return false;
  }

  return checkForPalindrome(text, index + 1);
}

const isPalindrome = checkForPalindrome("DEED", 0);
console.log("isPalindrome: ", isPalindrome);
