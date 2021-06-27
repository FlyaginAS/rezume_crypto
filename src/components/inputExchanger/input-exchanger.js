import React from 'react';
import { connect } from 'react-redux';
import Exchanger from '../exchanger';
import {
  inputChangerSearchShow,
  inputChangerSearchHide,
} from '../../actions';

const InputExchanger = ({
  listCurrencies,
  searchShow,
  inputChangerSearchShow,
  inputChangerSearchHide,
}) => {
  const onSearchClick = () => inputChangerSearchShow();
  const onCloseClick = () => inputChangerSearchHide();

  return (
    <Exchanger
      list={listCurrencies}
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
