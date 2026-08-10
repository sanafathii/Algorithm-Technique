function maxProfit(prices: number[]): number {
  let low = 0;
  let high = 1;
  let max = 0;

  while (high < prices.length) {
    const distance = prices[high] - prices[low];

    if (distance <= 0) {
      low = high;
    } else {
      max = Math.max(max, distance);
    }

    high++;
  }

  return max;
}
