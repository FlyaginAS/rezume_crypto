import React from 'react';
import './exchanger.scss';

const Exchanger = () => {
  return (
    <div className="crypto__exchanger exchanger">
      <div className="exchanger__input-value input-value">
        <span className="input-value__value">0.023</span>
        <img className="input-value__image-ticker" src="" alt="img" />
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
  );
};

export default Exchanger;
