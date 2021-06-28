import React from 'react';
import { connect } from 'react-redux';
import Exchanger from '../exchanger';
import {
  inputChangerSearchShow,
  inputChangerSearchHide,
  inputChangerSearchChange,
} from '../../actions';

const InputExchanger = ({
  searchShow,
  searchInput,
  listCurrencies,
  inputChangerSearchShow,
  inputChangerSearchHide,
  inputChangerSearchChange,
}) => {
  const onSearchClick = () => inputChangerSearchShow();
  const onCloseClick = () => inputChangerSearchHide();

  const filterList = () => {
    let filtered = [];

    filtered = listCurrencies.filter((item) => {
      return item.name.toLowerCase().includes(searchInput);
    });

    filtered.length = 5;

    return filtered;
  };
  return (
    <Exchanger
      list={filterList()}
      hover={searchShow}
      onSearchClick={onSearchClick}
      onCloseClick={onCloseClick}
      searchInput={searchInput}
      onSearchChange={(value) => inputChangerSearchChange(value)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    listCurrencies: state.app.listCurrencies,
    searchShow: state.inputChanger.searchShow,
    searchInput: state.inputChanger.searchInput,
    filteredList: state.inputChanger.filteredList,
  };
};

const mapDispatchToProps = {
  inputChangerSearchShow,
  inputChangerSearchHide,
  inputChangerSearchChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputExchanger);
