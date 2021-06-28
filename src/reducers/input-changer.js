const updateInputChanger = (state, action) => {
  if (state === undefined) {
    return {
      amountMoney: 0.023,
      searchInput: '',
      searchShow: false,
      currentCurrency: {},
      minimalExchangeAmount: null,
    };
  }

  switch (action.type) {
    case 'INPUT_CHANGER_SEARCH_SHOW':
      return {
        ...state.inputChanger,
        searchShow: true,
      };
    case 'INPUT_CHANGER_SEARCH_HIDE':
      return {
        ...state.inputChanger,
        searchShow: false,
      };
    case 'INPUT_CHANGER_SEARCH_CHANGE':
      return {
        ...state.inputChanger,
        searchInput: action.payload,
      };

    default:
      return state.inputChanger;
  }
};

export default updateInputChanger;
