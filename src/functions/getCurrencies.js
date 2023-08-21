export const getCurrencies = (currencies) => {
    return currencies.map((currency) => (<option key={currency} value={currency}>
        {currency}
    </option>))
}
