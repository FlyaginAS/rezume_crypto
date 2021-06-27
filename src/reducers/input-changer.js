const updateInputChanger = (state, action) => {
  if (state === undefined) {
    return {
      amountMoney: 0.023,
      searchInput: 'etheri',
      isHover: false,
      currentCurrency: {},
      minimalExchangeAmount: null,
    };
  }

  switch (action.type) {
    case '':
      return {};

    default:
      return state.inputChanger;
  }
};

export default updateInputChanger;
