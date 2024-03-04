function twoCrystalBalls(breaks: boolean[]): number {
  let jump = Math.floor(Math.sqrt(breaks.length));
  let i = jump;

  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jump;

  for (let j = 0; j <= jump && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

function testTwoCrystalBalls() {
  const breaks = [false, false, false, false, true, true, true, true];

  return twoCrystalBalls(breaks);
}

console.log(testTwoCrystalBalls());
