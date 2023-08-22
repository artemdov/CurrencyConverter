import { useEffect, useState } from 'react';
import { getUrl } from '../../functions/getUrl';
import { API_URL } from '../../consts/url';
import { CurrencyRatesComponent } from './CurrencyRatesComponent';

export const CurrencyRates = (props) => {
    const { currencies } = props
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [rates, setRates] = useState({});

    const handleCurrencyChange = (e) => {
        const value = e.target.value;
        setSelectedCurrency(value);
    };

    useEffect(() => {
        if (selectedCurrency) {
            fetch(getUrl(API_URL, selectedCurrency))
                .then((response) => response.json())
                .then((data) => {
                    setRates(data.rates);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, [selectedCurrency]);


    return CurrencyRatesComponent({
        ...props,
        currencies,
        handleCurrencyChange,
        rates,
        selectedCurrency,
    });
};
