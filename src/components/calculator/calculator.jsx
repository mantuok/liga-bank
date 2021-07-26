import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Select from 'react-select';
import CostAmount from '../cost-amount/cost-amount';
import InitialPayment from '../initial-payment/initial-payment';
import LoanTerm from '../loan-term/loan-term';
import AdditionalConditions from '../additional-conditions/additional-conditions';
import Offer from '../offer/offer';
import Application from '../application/application';
import ApplicationSent from "../application-sent/application-sent";

const Calculator = () => {
  const loans = useSelector((state) => state.loans);
  const activeLoan = useSelector((state) => state.activeLoan);
  const isApplicationToBeCreated = useSelector((state) => state.isApplicationToBeCreated);
  const applicationSentPopupToBeOpen = useSelector((state) => state.applicationSentPopupToBeOpen);
  const dispatch = useDispatch();

  const options = [
    {value: loans[0].id, label: loans[0].name},
    {value: loans[1].id, label: loans[1].name}
  ];

  const getLoanDataById = (id) => loans.filter((loan) => loan.id === id)[0];

  const renderCalculator = () => {
    if (activeLoan) {
      return (
        <div className="calculation__data-entry data-entry">
          <h3 className="data-entry__heading">Шаг 2. Введите параметры кредита</h3>
          <form className="data-entry__form form">
            <CostAmount />
            <InitialPayment />
            <LoanTerm />
            <AdditionalConditions />
          </form>
        </div>
      )
    }
  };

  const renderOffer  = () => {
    if (activeLoan) {
     return <Offer />
    }
  }

  const renderApplication = () => isApplicationToBeCreated ? <Application /> : ``;
  
  const renderApplicationSent = () => applicationSentPopupToBeOpen ? <ApplicationSent /> : ``;

  const handleCalculatorChange = (selectedOption) => {
    const selectedLoan = getLoanDataById(selectedOption.value);
    onCalculatorChange(selectedLoan)
  };

  const onCalculatorChange = (selectedLoan) => {
    dispatch(ActionCreator.selectLoan(selectedLoan))
  }

  const customSelectStyle = {
    control: (provided, state) => ({
      ...provided,
      height: 60,
      paddingRight: 18,
      paddingLeft: 20,
      fontSize: 16,
      fontWeight: 500,
      color: `#1F1E25`,
      borderRadius: 4,
      borderBottomLeftRadius: state.isFocused ? 0 : 4,
      borderBottomRightRadius: state.isFocused ? 0 : 4,
      borderColor: `#1F1E25`,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: `#1F1E25`
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: `none`
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: `#1F1E25`
    }),
    menu: (provided, state) => ({
      ...provided,
      margin: 0,
      padding: 0,
      border: `1px solid #1F1E25`,
      boxShadow: `none`,
      borderRadius: 0,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    }),
    menuList: (provided, state) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      margin: 0,
      paddingTop: 25,
      paddingBottom: 24,
      paddingLeft: 24,
      fontWeight: 400,
      borderBottom: `1px solid #C1C2CA`
    }),
  };

  return (
    <section className="main__calculator calculator" id="calculator">
      <h2 className="calculator__heading">Кредитный калькулятор</h2>
      <div className="calculator__calculation calculation">
        <div className="calculation__calculator-selection calculator-selection">
          <h3 className="calculator-selection__heading">Шаг 1. Цель кредита</h3>
          <Select 
            className="calculator-selection__select select"
            classNamePrefix="select"
            styles={customSelectStyle}
            onChange={handleCalculatorChange}
            options={options}
            placeholder={`Выберите цель кредита`}
          />
        </div>
        {renderCalculator()}
        {renderOffer()}
        {renderApplication()}
        {renderApplicationSent()}
      </div>
    </section>
  )
}

export default Calculator;