import React from 'react';
import styles from './styles.module.scss';
import { currencies } from '../../consts/currencies';
import { CurrencySelector } from '../CurrencySelector';

export const CurrencyConverterComponent = (props) => {

    const {
        amount,
        amountError,
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
            <div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Количество:</label>
                    <input type="number" value={amount} onChange={handleAmountChange}/>
                </div>
                {amountError && <span className={styles.error}>{amountError}</span>}
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
            <span className={styles.lastLabel}>{amountError ? amountError : convertedAmount}</span>
        </div>
    </div>);
};
