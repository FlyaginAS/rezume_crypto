import React from 'react';
import './exchanger.scss';

const Exchanger = ({
  list = [],
  hover,
  onSearchClick,
  onCloseClick,
}) => {
  const listElements = list.map((item) => {
    return (
      <li className="list__item item" key={item.image}>
        <img
          className="item__image"
          src={item.image}
          alt="item.name"
        />
        <span className="item__ticker">{item.ticker} </span>
        <span className="item__name"> {item.name}</span>
      </li>
    );
  });

  const input = (
    <div className="exchanger__input-value input-value">
      <span className="input-value__value">0.033</span>
      <div onClick={onSearchClick}>
        <img
          className="input-value__image-ticker"
          src={''}
          alt="img"
        />
        <span className="input-value__ticker">{'ticker'}</span>
        <img
          className="input-value__image-arrow-down"
          src={''}
          alt="img"
        />
      </div>
    </div>
  );

  const searchAndList = (
    <React.Fragment>
      <div className="exchanger__input-search input-search">
        <span className="input-search__value">Search</span>
        <button className="input-search__close">
          <img
            className="input-search__image"
            src=""
            alt="close"
            onClick={onCloseClick}
          />
        </button>
      </div>
      <ul className="exchanger__list list">{listElements}</ul>
    </React.Fragment>
  );

  const content = hover ? searchAndList : input;

  return <div className="crypto__exchanger exchanger">{content}</div>;
};

export default Exchanger;
