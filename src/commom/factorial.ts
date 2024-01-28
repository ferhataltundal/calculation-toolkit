function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Please enter a positive value.");
  }

  if (Math.floor(n) !== n) {
    throw new Error("Please enter an integer value.");
  }

  let acc = 1;
  for (let j = 2; j <= n; j++) {
    acc = acc * j;
  }
  return acc;
}

export default factorial;
