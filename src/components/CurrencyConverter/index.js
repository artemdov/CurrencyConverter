import { CurrencyConverterComponent } from './CurrencyConverterComponent';
import { useEffect, useState } from 'react';
import { getUrl } from '../../functions/getUrl';
import { API_URL } from '../../consts/url';


export const CurrencyConverter = (props) => {
    const { currencies } = props
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
    };

    const handleFromCurrencyChange = (e) => {
        const value = e.target.value;
        setFromCurrency(value);
    };

    const handleToCurrencyChange = (e) => {
        const value = e.target.value;
        setToCurrency(value);
    };

    useEffect(() => {
        if (amount && fromCurrency && toCurrency) {
            fetch(getUrl(API_URL, fromCurrency))
                .then((response) => response.json())
                .then((data) => {
                    const rate = data.rates[toCurrency];
                    const convertedAmount = amount * rate;
                    setConvertedAmount(convertedAmount);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, [amount, fromCurrency, toCurrency]);


    return CurrencyConverterComponent({
        ...props,
        amount,
        convertedAmount,
        currencies,
        fromCurrency,
        handleAmountChange,
        handleFromCurrencyChange,
        handleToCurrencyChange,
        toCurrency,
    });
};
