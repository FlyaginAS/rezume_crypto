const fetchCurrenciesRequest = () => {
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

const inputChangerSearchShow = () => {
  return {
    type: 'INPUT_CHANGER_SEARCH_SHOW',
    payload: true,
  };
};

const inputChangerSearchHide = () => {
  return {
    type: 'INPUT_CHANGER_SEARCH_HIDE',
    payload: true,
  };
};

const inputChangerSearchChange = (value) => {
  return {
    type: 'INPUT_CHANGER_SEARCH_CHANGE',
    payload: value,
  };
};

export {
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  inputChangerSearchShow,
  inputChangerSearchHide,
  inputChangerSearchChange,
};
