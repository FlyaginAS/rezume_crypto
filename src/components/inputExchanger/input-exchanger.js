import React from 'react';
import { connect } from 'react-redux';
import Exchanger from '../exchanger';
import {
  inputChangerSearchShow,
  inputChangerSearchHide,
} from '../../actions';

const InputExchanger = ({
  searchShow,
  inputChangerSearchShow,
  inputChangerSearchHide,
  list,
}) => {
  const onSearchClick = () => inputChangerSearchShow();
  const onCloseClick = () => inputChangerSearchHide();

  console.log(list);

  return (
    <Exchanger
      list={list}
      hover={searchShow}
      onSearchClick={onSearchClick}
      onCloseClick={onCloseClick}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    listCurrencies: state.app.listCurrencies,
    searchShow: state.inputChanger.searchShow,
    list: state.app.listCurrencies,
  };
};

const mapDispatchToProps = {
  inputChangerSearchShow,
  inputChangerSearchHide,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputExchanger);
