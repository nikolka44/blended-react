type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrentcy {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }) {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 150, currency: "USD" });
