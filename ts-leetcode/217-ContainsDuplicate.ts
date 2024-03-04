function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);

  if (set.size === nums.length) {
    return false;
  } else {
    return true;
  }
}

function testContainsDuplicate(): boolean {
  const a = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

  return containsDuplicate(a);
}

console.log(testContainsDuplicate());
