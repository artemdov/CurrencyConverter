import styles from '../CurrencyRates/styles.module.scss';
import { currencies } from '../consts/currencies';
import { getCurrencies } from '../functions/getCurrencies';

export const CurrencyRatesComponent = (props) => {

    const { selectedCurrency, handleCurrencyChange, rates } = props

    return (
        <div className={styles.ratesContainer}>
            <h2 className={styles.header}>Currency Rates</h2>
            <div className={styles.inputContainer}>
                <label>Select Currency:</label>
                <select value={selectedCurrency} onChange={handleCurrencyChange}>
                    <option value="">Select currency</option>
                    {getCurrencies(currencies)}
                </select>
            </div>
            {selectedCurrency && (<div className={styles.ratesList}>
                    <h3>Rates relative to {selectedCurrency}</h3>
                    <ul className={styles.rates}>
                        {Object.entries(rates)
                            .filter(([currency, rate]) => currencies.includes(currency))
                            .map(([currency, rate]) => (
                                <li key={currency}>
                                    {currency}: {rate}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>);
};
