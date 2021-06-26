import React from 'react';
import ExchangeBlock from '../exchange-block';
import Exchanger from '../exchanger';
import './app.scss';

const App = () => {
  return (
    <div className="crypto">
      <h1 className="crypto__header crypto-header">
        Crypto Exchange
      </h1>
      <p className="crypto__description crypto-description">
        Exchange fast and easy
      </p>
      <Exchanger />
      <div className="crypto__arrows">
        <img className="crypto__arrows-image" src={''} alt="img" />
      </div>
      <Exchanger />
      <ExchangeBlock />
    </div>
  );
};

export default App;
