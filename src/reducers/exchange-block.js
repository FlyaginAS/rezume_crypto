const updateExchangeBlock = (state, action) => {
  if (state === undefined) {
    return {
      cryptoAddress: null,
    };
  }

  switch (action.type) {
    case '1':
      return {};

    default:
      return state.exchangeBlock;
  }
};

export default updateExchangeBlock;
