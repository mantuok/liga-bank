import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Select from 'react-select';
import CostAmount from '../cost-amount/cost-amount';
import InitialPayment from '../initial-payment/initial-payment';
import LoanTerm from '../loan-term/loan-term';
import AdditionalConditions from '../additional-conditions/additional-conditions';
import Offer from '../offer/offer';

const Calculator = () => {
  const loans = useSelector((state) => state.loans);
  const activeLoan = useSelector((state) => state.activeLoan);
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
            <Offer />
          </form>
        </div>
      )
    }
  }

  const handleCalculatorChange = (selectedOption) => {
    const selectedLoan = getLoanDataById(selectedOption.value);
    onCalculatorChange(selectedLoan)
  };

  const onCalculatorChange = (selectedLoan) => {
    dispatch(ActionCreator.selectLoan(selectedLoan))
  }

  return (
    <section className="main__calculator calculator">
      <h2 className="calculator__heading">Кредитный калькулятор</h2>
      <div className="calculator__calculation calculation">
        <div className="calculation__calculator-selection calculator-selection">
          <h3 className="calculator-selection__heading">Шаг 1. Цель кредита</h3>
          <Select 
            className="calculator-selection__select"
            onChange={handleCalculatorChange}
            options={options}
            placeholder={`Выберите цель кредита`}
          />
        </div>
        {renderCalculator()}
        {/* {renderOffer()} */}
      </div>
    </section>
  )
}

export default Calculator;