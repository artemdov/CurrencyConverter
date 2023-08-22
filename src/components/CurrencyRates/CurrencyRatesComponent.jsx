import styles from './styles.module.scss';
import { currencies } from '../../consts/currencies';
import { getCurrencies } from '../../functions/getCurrencies';

export const CurrencyRatesComponent = (props) => {

    const { selectedCurrency, handleCurrencyChange, rates } = props

    return (
        <div className={styles.converterContainer}>
            <div className={styles.ratesContainer}>
                <h2 className={styles.header}>Курсы валют</h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Выберите валюту:</label>
                    <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        <option value="">Валюта</option>
                        {getCurrencies(currencies)}
                    </select>
                </div>
                {selectedCurrency && (<div className={styles.ratesList}>
                        <h3>Курсы по отношению к {selectedCurrency}</h3>
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
            </div>
        </div>);
};
