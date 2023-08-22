import React from 'react';
import styles from '../CurrencyConverter/styles.module.scss';
import { currencies } from '../consts/currencies';
import { getCurrencies } from '../functions/getCurrencies';
import { CurrencySelector } from '../components/CurrencySelector';

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

    return (<div className={styles.converterContainer}>
        <h1 className={styles.header}>Конвертер валют</h1>
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Количество:</label>
                <input type="number" value={amount} onChange={handleAmountChange}/>
            </div>
            <CurrencySelector
                label="От:"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                options={currencies}
                inputStyles={styles.inputContainer}
                labelStyles={styles.label}
            />
            <CurrencySelector
                label="К:"
                value={toCurrency}
                onChange={handleToCurrencyChange}
                options={currencies}
                inputStyles={styles.inputContainer}
                labelStyles={styles.label}

            />
        </div>
        <div className={styles.resultContainer}>
            <label className={styles.lastLabel}>Сумма конвертации:</label>
            <span className={styles.lastLabel}>{convertedAmount}</span>
        </div>
    </div>);
};
