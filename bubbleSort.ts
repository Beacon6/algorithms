function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

function testBubbleSort(): number[] {
  const a = [1, 3, 7, 4, 2];

  return bubbleSort(a);
}

console.log(testBubbleSort());

