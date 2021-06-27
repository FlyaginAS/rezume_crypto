const initialState = {
  listCurrencies: null,
  inputChanger: {
    amountMoney: 0.023,
    searchInput: 'etheri',
    isHover: false,
    currentCurrency: {},
    minimalExchangeAmount: null,
  },
  outputChanger: {
    amountMoney: 0.023,
    searchInput: 'etheri',
    isHover: false,
    currentCurrency: {},
    minimalExchangeAmount: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
      console.log('hello from reducer');
    default:
      return state;
  }
};

export default reducer;
