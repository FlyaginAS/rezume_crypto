import React from 'react';
import { connect } from 'react-redux';
import Exchanger from '../exchanger';
import {
  outputChangerSearchShow,
  outputChangerSearchHide,
  outputChangerSearchChange,
} from '../../actions';

const OutputExchanger = ({
  searchShow,
  searchInput,
  listCurrencies,
  outputChangerSearchShow,
  outputChangerSearchHide,
  outputChangerSearchChange,
}) => {
  const onSearchClick = () => outputChangerSearchShow();
  const onCloseClick = () => outputChangerSearchHide();

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
      onSearchChange={(value) => outputChangerSearchChange(value)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    listCurrencies: state.app.listCurrencies,
    searchShow: state.outputChanger.searchShow,
    searchInput: state.outputChanger.searchInput,
    filteredList: state.outputChanger.filteredList,
  };
};

const mapDispatchToProps = {
  outputChangerSearchShow,
  outputChangerSearchHide,
  outputChangerSearchChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutputExchanger);
