function binarySearch(array: number[], n: number): number {
  let l = 0;
  let r = array.length - 1;

  while (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    if (array[m] === n) {
      return m;
    } else if (array[m] < n) {
      l = m + 1;
    } else if (array[m] > n) {
      r = m;
    }
  }

  return -1;
}

function testBinarySearch(n: number): number {
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return binarySearch(a, n);
}

console.log(testBinarySearch(6));
console.log(testBinarySearch(16));
