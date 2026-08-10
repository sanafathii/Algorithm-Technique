function reverse(x: number): number {
  if (x === 0) {
    return 0;
  }

  let isNegative = x < 0;
  if (isNegative) {
    x = -x;
  }

  const digit = x % 10;
  const rank = Math.floor(Math.log10(x));

  if (x < 10) {
    return isNegative ? -digit : digit;
  }

  const reversdigit = digit * Math.pow(10, rank);
  const other = Math.floor(x / 10);

  const reversedNumber = reversdigit + reverse(other);

  if (reversedNumber > 2 ** 31 - 1) return 0;

  return isNegative ? -reversedNumber : reversedNumber;
}
