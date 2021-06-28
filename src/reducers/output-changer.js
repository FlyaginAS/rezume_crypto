const updateOutputChanger = (state, action) => {
  if (state === undefined) {
    return {
      estimatedMoney: 0.023,
      searchInput: '',
      searchShow: false,
      currentCurrency: {},
      minimalExchangeAmount: null,
    };
  }

  switch (action.type) {
    case 'OUTPUT_CHANGER_SEARCH_SHOW':
      return {
        ...state.outputChanger,
        searchShow: true,
      };
    case 'OUTPUT_CHANGER_SEARCH_HIDE':
      return {
        ...state.outputChanger,
        searchShow: false,
      };
    case 'OUTPUT_CHANGER_SEARCH_CHANGE':
      return {
        ...state.outputChanger,
        searchInput: action.payload,
      };

    default:
      return state.outputChanger;
  }
};

export default updateOutputChanger;
