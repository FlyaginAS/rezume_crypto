const updateApp = (state, action) => {
  if (state === undefined) {
    return {
      listCurrencies: [],
      loading: false,
      error: false,
    };
  }

  switch (action.type) {
    case 'FETCH_CURRENCIES_REQUEST':
      return {
        listCurrencies: [],
        loading: true,
        error: false,
      };
    case 'FETCH_CURRENCIES_SUCCESS':
      return {
        listCurrencies: action.payload,
        loading: false,
        error: false,
      };
    case 'FETCH_CURRENCIES_FAILURE':
      return {
        listCurrencies: [],
        loading: false,
        error: action.payload,
      };

    default:
      console.log('default');
      return state.app;
  }
};
export default updateApp;
