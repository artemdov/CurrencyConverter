export const getCurrencies = (currencyList) => {
    return currencyList.map((currency) => (<option key={currency} value={currency}>
        {currency}
    </option>))
}
