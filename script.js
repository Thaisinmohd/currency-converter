// script.js
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.0, AUD: 1.35 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129.0, AUD: 1.59 },
    GBP: { USD: 1.34, EUR: 1.14, JPY: 146.0, AUD: 1.80 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, AUD: 0.013 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 76.0 },
};

document.getElementById('converter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = 'Please select different currencies.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
