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
} from '../../utils/calculations'
import { ActionCreator } from '../../store/action';

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
        <div className="offer__error error">
          <h4>Наш банк не выдаёт ипотечные кредиты меньше {loan.minLoan} рублей.</h4>
          <p>Попробуйте использовать другие параметры для расчёта.</p>
        </div>
      )
    } else {
      return (
        <div className="offer__result">
          <ul className="offer__list">
            <li className="offer__item">
              <span className="offer__value">{loanAmount + ` рублей`}</span>
              <span className="offer__label">{LoanMeta[loanType].LOAN_AMOUNT_LABEL}</span>
            </li>
            <li className="offer__item">
              <span className="offer__value">{loanRate + ` %`}</span>
              <span className="offer__label">Процентная ставка</span>
            </li>
            <li className="offer__item">
              <span className="offer__value">{monthlyPayment + ` рублей`}</span>
              <span className="offer__label">Ежемесячный платеж</span>
            </li>
            <li className="offer__item">
              <span className="offer__value">{income + ` рублей`}</span>
              <span className="offer__label">Необходимый доход</span>
            </li>
          </ul>
          <button 
          type="button" 
          className="offer__checkout"
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