import React, { useContext, useEffect } from 'react';
import ApiContext from '../api-service-context';
import ExchangeBlock from '../exchange-block';
import {
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
} from '../../actions';
import InputExchanger from '../inputExchanger';
import OutputExchanger from '../output-exchanger';
import './app.scss';
import { connect } from 'react-redux';

const App = ({
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
}) => {
  const apiService = useContext(ApiContext);

  useEffect(() => {
    fetchCurrenciesRequest();
    apiService
      .getListCurrencies()
      .then((list) => {
        fetchCurrenciesSuccess(list);
      })
      .catch((err) => {
        fetchCurrenciesFailure(err);
      });
  }, []);

  return (
    <div className="crypto">
      <h1 className="crypto__header crypto-header">
        Crypto Exchange
      </h1>
      <p className="crypto__description crypto-description">
        Exchange fast and easy
      </p>
      <InputExchanger />
      <div className="crypto__arrows">
        <img className="crypto__arrows-image" src={''} alt="img" />
      </div>
      <OutputExchanger />
      <ExchangeBlock />
    </div>
  );
};

const mapDispatchToProps = {
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
};

export default connect(null, mapDispatchToProps)(App);
