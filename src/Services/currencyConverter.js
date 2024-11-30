function convertFromGbp(currency, amount) {
  if (currency === "GBP") {
    return amount;
  }
  if (currency === "USD") {
    return Math.round(amount * 1.19 * 100) / 100;
  }

  if (currency === "EUR") {
    return Math.round(amount * 1.16 * 100) / 100;
  }

  if (currency === "YEN") {
    return Math.round(amount * 162.16 * 100) / 100;
  }
}

module.exports = { convertFromGbp };
