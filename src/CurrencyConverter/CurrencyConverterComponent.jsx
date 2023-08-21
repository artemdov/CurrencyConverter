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
            <h1 className={styles.header}>Currency Converter</h1>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Amount:</label>
                    <input type="number" value={amount} onChange={handleAmountChange}/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>From:</label>
                    <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                        <option value="">Select currency</option>
                        {getCurrencies(currencies)}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>To:</label>
                    <select value={toCurrency} onChange={handleToCurrencyChange}>
                        <option value="">Select currency</option>
                        {getCurrencies(currencies)}
                    </select>
                </div>
            </div>
            <div className={styles.resultContainer}>
                <label className={styles.lastLabel}>Converted Amount:</label>
                <span className={styles.lastLabel}>{convertedAmount}</span>
            </div>
        </div>
    );
};
