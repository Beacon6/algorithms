function linearSearch(array: number[], x: number): boolean {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return true;
        }
    }

    return false;
}

function testLinearSearch(x: number): boolean {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return linearSearch(a, x);
}

console.log(testLinearSearch(6));
console.log(testLinearSearch(16));

