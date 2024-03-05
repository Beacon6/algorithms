function twoSum(nums: number[], target: number): number[] {
  let result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];

    if (result.length === 0) {
      for (let j = i + 1; j <= nums.length; j++) {
        if (nums[j] === n) {
          result = [i, j];
          break;
        }
      }
    }
  }

  return result;
}

function testTwoSum(): number[] {
  const nums = [3, 3];
  const target = 6

  return twoSum(nums, target);
}

console.log(testTwoSum());
