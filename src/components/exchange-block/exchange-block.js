import React from 'react';
import './exchange-block.scss';

const ExchangeBlock = () => {
  return (
    <form className="crypto__exchange-block exchange-block">
      <label className="exchange-block__address" htmlFor="address">
        Your Ethereum address
      </label>
      <input
        className="exchange-block__input"
        id="address"
        type="text"
      />
      <button className="exchange-block__exchange " type="submit">
        Exchange
      </button>
    </form>
  );
};

export default ExchangeBlock;
