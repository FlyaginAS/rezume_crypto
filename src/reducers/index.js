import updateApp from './app';
import updateExchangeBlock from './exchange-block';
import updateInputChanger from './input-changer';
import updateOutputChanger from './output-changer';

const initialState = {
  outputChanger: {
    amountMoney: 0.023,
    searchInput: 'etheri',
    isHover: false,
    currentCurrency: {},
    estimatedExchangeAmount: null,
  },
};

const reducer = (state, action) => {
  return {
    app: updateApp(),
    inputChanger: updateInputChanger(),
    outputChanger: updateOutputChanger(),
    exchangeBlock: updateExchangeBlock(),
  };
};

export default reducer;
