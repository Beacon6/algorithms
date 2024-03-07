function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};

  for (let i = 0; i < strs.length; i++) {
    const w = strs[i].split('').sort().join('');

    if (w in map) {
      map[w].push(strs[i]);
    } else {
      map[w] = [strs[i]];
    }
  }

  return Object.values(map);
};

function testGroupAnagrams1(): string[][] {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

  return groupAnagrams(strs);
}

function testGroupAnagrams2(): string[][] {
  const strs = [''];
  return groupAnagrams(strs);
}

function testGroupAnagrams3(): string[][] {
  const strs = ['6'];
  return groupAnagrams(strs);
}

console.log(testGroupAnagrams1());
console.log(testGroupAnagrams2());
console.log(testGroupAnagrams3());
