import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';
import { CurrencyRates } from './CurrencyRates/CurrencyRates';

const App = () => {
    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NZD'];

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Конвертер</Link>
                        </li>
                        <li>
                            <Link to="/rates">Курсы валют</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<CurrencyConverter currencies={currencies}/>}/>
                    <Route path="/rates" element={<CurrencyRates currencies={currencies}/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
