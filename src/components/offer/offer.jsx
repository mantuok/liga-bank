import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  LoanMeta,
} from '../../const';
import {
  getLoanAmount,
  getLoanRate,
  getMonthlyPayment,
  getIncome
} from '../../utils/calculations';
import {ActionCreator} from '../../store/action';
import {
  getRubleSuffix,
  getSeparatedNumber
} from '../../utils/common';

const Offer = () => {
  const dispatch = useDispatch();
  const costAmount = useSelector((state) => state.costAmount);
  const loan = useSelector((state) => state.activeLoan);
  const loanType = loan.type;
  const loanTerm = useSelector((state) => state.loanTerm);
  const initialPayment = useSelector((state) => state.initialPayment);
  const additionalConditions = useSelector((state) => state.additionalConditions);

  const loanAmount = getLoanAmount(
    loanType,
    costAmount,
    initialPayment,
    additionalConditions,
    loan.additionalConditions
  );
  const loanRate = getLoanRate(
    loanType,
    loan.rate,
    loan.additionalConditions,
    costAmount,
    initialPayment,
    additionalConditions
  );
  const monthlyPayment = getMonthlyPayment(
    loanAmount,
    loanRate,
    loanTerm
  );
  const income = getIncome(
    monthlyPayment,
    loan.incomePercent
  );

  const handleCheckoutButtonClick = () => {
    dispatch(ActionCreator.createApplication(true))
  }

  const renderLoanResult = () => {
    if (loanAmount <= loan.minLoan) {
      return (
        <div className="offer__error offer-error">
          <h4 className="offer-error__heading">Наш банк не выдаёт ипотечные кредиты меньше {loan.minLoan} рублей.</h4>
          <p className="offer-error__text">Попробуйте использовать другие параметры для расчёта.</p>
        </div>
      )
    } else {
      return (
        <div className="offer__result offer-result">
          <h4 className="offer-result__heading">Наше предложение</h4>
          <ul className="offer-result__list">
            <li className="offer-result__item">
              <span className="offer-result__value">{getSeparatedNumber(loanAmount) + getRubleSuffix(loanAmount)}</span>
              <span className="offer-result__label">{LoanMeta[loanType].LOAN_AMOUNT_LABEL}</span>
            </li>
            <li className="offer-result__item">
              <span className="offer-result__value">{loanRate + ` %`}</span>
              <span className="offer-result__label">Процентная ставка</span>
            </li>
            <li className="offer-result__item">
              <span className="offer-result__value">{getSeparatedNumber(monthlyPayment) + getRubleSuffix(monthlyPayment)}</span>
              <span className="offer-result__label">Ежемесячный платеж</span>
            </li>
            <li className="offer-result__item">
              <span className="offer-result__value">{getSeparatedNumber(income) + getRubleSuffix(income)}</span>
              <span className="offer-result__label">Необходимый доход</span>
            </li>
          </ul>
          <button 
          type="button" 
          className="offer-result__checkout"
          onClick={handleCheckoutButtonClick}
        >
          Оформить заявку
        </button> 
      </div>
    )}
  }

  return (
    <div className="calculation__offer offer">
      {renderLoanResult()}
    </div>
  )
};

export default Offer;