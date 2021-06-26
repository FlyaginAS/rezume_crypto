import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

const App = () => {
  return (
    <div className="crypto">
      <h1 className="crypto__header crypto-header">
        Crypto Exchange
      </h1>
      <p className="crypto__description crypto-description">
        Exchange fast and easy
      </p>
      <div className="crypto__exchanger exchanger">
        <div className="exchanger__input-value input-value">
          <span className="input-value__value">0.023</span>
          <img
            className="input-value__image-ticker"
            src=""
            alt="img"
          />
          <span className="input-value__ticker">BTC</span>
          <img className="input-value__image-arrow-down" alt="img" />
        </div>

        <div className="exchanger__input-search input-search">
          <span className="input-search__value">Search</span>
          <button className="input-search__close">
            <img className="input-search__image" src="" alt="close" />
          </button>
        </div>
        <ul className="exchanger__list list">
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
        </ul>
      </div>

      <div className="crypto__arrows">
        <img className="crypto__arrows-image" src={''} alt="img" />
      </div>

      <div className="crypto__exchanger exchanger">
        <div className="exchanger__input-value input-value">
          <span className="input-value__value">0.023</span>
          <img
            className="input-value__image-ticker"
            src=""
            alt="img"
          />
          <span className="input-value__ticker">BTC</span>
          <img className="input-value__image-arrow-down" alt="img" />
        </div>

        <div className="exchanger__input-search input-search">
          <span className="input-search__value">Search</span>
          <button className="input-search__close">
            <img className="input-search__image" src="" alt="close" />
          </button>
        </div>
        <ul className="exchanger__list list">
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
          <li className="list__item item">
            <img className="item__image" src={''} alt="img" />
            <span className="item__ticker">ETH </span>
            <span className="item__name"> Etherium</span>
          </li>
        </ul>
      </div>
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
