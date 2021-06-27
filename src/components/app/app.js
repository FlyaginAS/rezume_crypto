import React, { useEffect } from 'react';
import ExchangeBlock from '../exchange-block';
import Exchanger from '../exchanger';
import './app.scss';
import { connect } from 'react-redux';
import { hello } from '../../actions';

const App = ({ store, hello }) => {
  hello();
  console.log(store);

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

const mapStateToProps = (store) => {
  return { store };
};

const mapDispatchToProps = {
  hello,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
