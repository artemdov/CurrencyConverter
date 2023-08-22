import { getCurrencies } from '../functions/getCurrencies';

export const CurrencySelector = ({ label, value, onChange, options, inputStyles, labelStyles }) => (
    <div className={inputStyles}>
        <label className={labelStyles}>{label}</label>
        <select value={value} onChange={onChange}>
            <option value="">Выберите валюту</option>
            {getCurrencies(options)}
        </select>
    </div>
);
