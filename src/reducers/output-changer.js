const updateOutputChanger = (state, action) => {
  if (state === undefined) {
    return {
      estimatedMoney: 0.023,
      searchInput: 'etheri',
      isHover: false,
      currentCurrency: {},
      // minimalExchangeAmount: null,
    };
  }

  switch (action.type) {
    case '':
      return {};

    default:
      return state.outputChanger;
  }
};

export default updateOutputChanger;
