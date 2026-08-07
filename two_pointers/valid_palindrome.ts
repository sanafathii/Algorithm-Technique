function normalizeText(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let character = s[i].toLocaleLowerCase();
    if (alphnomeric(character)) {
      result += character;
    }
  }
  return result;
}

function alphnomeric(character: string): boolean {
  const code = character.charCodeAt(0);
  return (48 <= code && code <= 57) || (97 <= code && code <= 122);
}

function isPalindrome(s: string): boolean {
  const normalizedText = normalizeText(s);

  let left = 0;
  let right = normalizedText.length - 1;

  while (left <= right) {
    if (normalizedText[left] !== normalizedText[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

// test cases
isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");
