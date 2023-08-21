import './App.css';
import {CurrencyRates} from "./CurrencyRates";
import {CurrencyConverter} from "./CurrencyConverter";

const App = () => {
    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NZD'];

    return (
        <div>
            <CurrencyConverter currencies={currencies}/>
            <CurrencyRates currencies={currencies}/>
        </div>
    );
};

export default App;
