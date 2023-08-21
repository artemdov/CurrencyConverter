import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CurrencyConverter } from './CurrencyConverter';
import { CurrencyRates } from './CurrencyRates';
import appStyles from './appStyles.module.css';

const App = () => {

    return (
        <Router>
            <div className={appStyles.app}>
                <nav>
                    <ul className={appStyles.list}>
                        <li>
                            <Link to="/">Конвертер</Link>
                        </li>
                        <li>
                            <Link to="/rates">Курсы валют</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<CurrencyConverter/>}/>
                    <Route path="/rates" element={<CurrencyRates/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
