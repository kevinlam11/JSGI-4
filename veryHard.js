function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;

  for (const coin of coins) {
    if (coin <= amount) {
      amount -= coin;
      count++;
    }
  }
  return amount === 0 ? count : -1;
}
const coins1 = [1, 2, 3, 4, 5];
const amount1 = 10;

console.log(coinChange(coins1, amount1));

const coins2 = [6, 7, 8, 9, 10];
const amount2 = 20;

console.log(coinChange(coins2, amount2));
