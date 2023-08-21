import React, { useState, useEffect } from 'react';

export const CurrencyConverter = ({ currencies }) => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
    };

    const handleFromCurrencyChange = (e) => {
        const value = e.target.value;
        setFromCurrency(value);
    };

    const handleToCurrencyChange = (e) => {
        const value = e.target.value;
        setToCurrency(value);
    };

    useEffect(() => {
        if (amount && fromCurrency && toCurrency) {
            fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
                .then((response) => response.json())
                .then((data) => {
                    const rate = data.rates[toCurrency];
                    const convertedAmount = amount * rate;
                    setConvertedAmount(convertedAmount);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div>
            <h2>Currency Converter</h2>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <label>From:</label>
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="">Select currency</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>To:</label>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="">Select currency</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Converted Amount:</label>
                <span>{convertedAmount}</span>
            </div>
        </div>
    );
};

