function topKFrequent(nums: number[], k: number): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  let mapArray: number[][] = [];

  for (const key in map) {
    mapArray.push([Number(key), map[key]]);
  }
  mapArray.sort((a, b) => b[1] - a[1]);

  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(mapArray[i][0]);
  }

  return result;
};

function testTopKFrequent(): number[] {
  const array = [4, 4, 4, 5, 5, 6];

  return topKFrequent(array, 2);
}

function testTopKFrequent2(): number[] {
  const array = [1];

  return topKFrequent(array, 1);
}

console.log(testTopKFrequent());
console.log(testTopKFrequent2());
