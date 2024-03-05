function isAnagram(s: string, t: string): boolean {
  const sArray = s.split('').sort();
  const tArray = t.split('').sort();

  if (sArray.length === tArray.length) {
    for (let i = 0; i < sArray.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

function testIsAnagram(): boolean {
  const a = 'anagram';
  const b = 'nagaram';

  return isAnagram(a, b);
}

console.log(testIsAnagram());
