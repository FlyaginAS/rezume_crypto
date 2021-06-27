const fetchCurrenciesRequest = () => {
  console.log('fetch from actions');
  return {
    type: 'FETCH_CURRENCIES_REQUEST',
  };
};

const fetchCurrenciesSuccess = (list) => {
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    payload: list,
  };
};

const fetchCurrenciesFailure = (err) => {
  return {
    type: 'FETCH_CURRENCIES_FAILURE',
    payload: err,
  };
};

export {
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
};
