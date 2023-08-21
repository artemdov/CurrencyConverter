import { useEffect, useState } from 'react';
import styles from '../CurrencyRates/styles.module.scss';

export const CurrencyRates = ({ currencies }) => {
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

    return (<div className={styles.ratesContainer}>
        <h2>Currency Rates</h2>
        <div className={styles.inputContainer}>
            <label>Select Currency:</label>
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="">Select currency</option>
                {currencies.map((currency) => (<option key={currency} value={currency}>
                    {currency}
                </option>))}
            </select>
        </div>
        {selectedCurrency && (<div className={styles.ratesList}>
            <h3>Rates relative to {selectedCurrency}</h3>
            <ul>
                {Object.entries(rates).map(([currency, rate]) => (<li key={currency}>
                    {currency}: {rate}
                </li>))}
            </ul>
        </div>)}
    </div>);
};
