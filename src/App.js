import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CurrencyConverter } from './CurrencyConverter';
import { CurrencyRates } from './CurrencyRates';

const App = () => {

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
                    <Route path="/" element={<CurrencyConverter />}/>
                    <Route path="/rates" element={<CurrencyRates />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
