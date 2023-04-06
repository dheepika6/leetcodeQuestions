function maxProfit(prices: number[]): number {
  const findMaxProfit = (profit: number, i: number, buy: boolean): number => {
    const price = prices[i];
    let buyProfit: number = Number.NEGATIVE_INFINITY;
    let sellProfit: number = Number.NEGATIVE_INFINITY;

    if (i >= prices.length) {
      console.log("profit: ", profit);
      return 0;
    }
    console.log(
      `Day: ${i}-${prices[i]}, ${buy ? "Buy" : "Sell"}, buy: ${
        profit - price
      }, sell: ${profit + price}, noop: ${profit}`
    );
    if (buy) {
      buyProfit = findMaxProfit(profit - price, i + 1, false);
    } else {
      if (profit + price >= 0) {
        sellProfit = findMaxProfit(profit + price, i + 1, true);
      }
    }
    const noop = findMaxProfit(profit, i + 1, buy);

    const maxValue = Math.max(buyProfit, sellProfit, noop);
    console.log(`maxValue- ${maxValue}, ${buyProfit} ${sellProfit} ${noop}`);
    return maxValue;
  };

  return findMaxProfit(0, 0, true);
}

const profit = maxProfit([7, 1, 5, 3, 6, 4]);
console.log("profit", profit);
