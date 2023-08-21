import React from 'react';
import styles from '../CurrencyConverter/styles.module.scss';
import { currencies } from '../consts/currencies';
import { getCurrencies } from '../functions/getCurrencies';

export const CurrencyConverterComponent = (props) => {

    const {
        amount,
        convertedAmount,
        fromCurrency,
        handleAmountChange,
        handleFromCurrencyChange,
        handleToCurrencyChange,
        toCurrency,
    } = props

    return (
        <div className={styles.converterContainer}>
            <h2>Currency Converter</h2>
            <div className={styles.inputContainer}>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange}/>
            </div>
            <div className={styles.inputContainer}>
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
            <div className={styles.inputContainer}>
                <label>To:</label>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="">Select currency</option>
                    {getCurrencies(currencies)}
                </select>
            </div>
            <div className={styles.resultContainer}>
                <label>Converted Amount:</label>
                <span>{convertedAmount}</span>
            </div>
        </div>
    );
};
