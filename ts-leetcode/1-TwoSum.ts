function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};

  let i = 0;
  let x = 0;

  for (; i < nums.length; i++) {
    x = target - nums[i];

    if (x in map) {
      x = map[x];
      break;
    } else {
      map[nums[i]] = i;
    }
  }

  return [i, x];
}

function testTwoSum(): number[] {
  const nums = [3, 3];
  const target = 6;

  return twoSum(nums, target);
}

console.log(testTwoSum());
