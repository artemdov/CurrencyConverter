import {useEffect, useState} from "react";
import '../App.css';

export const CurrencyRates = ({currencies}) => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [rates, setRates] = useState({});

    const handleCurrencyChange = (e) => {
        const value = e.target.value;
        setSelectedCurrency(value);
    };

    useEffect(() => {
        if (selectedCurrency) {
            fetch(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`)
                .then((response) => response.json())
                .then((data) => {
                    setRates(data.rates);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, [selectedCurrency]);

    return (
        <div className="rates-container">
            <h2>Currency Rates</h2>
            <div className="input-container">
                <label>Select Currency:</label>
                <select value={selectedCurrency} onChange={handleCurrencyChange}>
                    <option value="">Select currency</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCurrency && (
                <div className="rates-list">
                    <h3>Rates relative to {selectedCurrency}</h3>
                    <ul>
                        {Object.entries(rates).map(([currency, rate]) => (
                            <li key={currency}>
                                {currency}: {rate}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
