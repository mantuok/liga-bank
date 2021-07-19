import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  LoanMeta,
  PERCENTS
} from '../../const';

const Offer = () => {
  const costAmount = useSelector((state) => state.costAmount);
  const loan = useSelector((state) => state.activeLoan);
  const loanType = loan.type;
  const loanTerm = useSelector((state) => state.loanTerm);
  const initialPayment = useSelector((state) => state.initialPayment);
  const additionalConditions = useSelector((state) => state.additionalConditions);

  const getLoanAmount = () => {
    if (additionalConditions.includes(LoanMeta[loanType].AdditionalCondition.MATERNAL)) {
      return (costAmount - initialPayment - loan.additionalConditions[0].value);
    } else {
      return (costAmount - initialPayment);
    }
  }

  const getLoanRate = () => {
    if (
      ((initialPayment / costAmount) < loan.rate.condition) ||
      (initialPayment === 0)
     ) {
      return (loan.rate.rate1 * PERCENTS)
    } else {
      return (loan.rate.rate2 * PERCENTS)
    }
  };

  const getMonthlyPayment = () => {
    // debugger
    if (loanAmount !== 0) {
      const monthlyRate = loanRate / (12 * 100);
      const months = loanTerm * 12;
      const monthlyPayment = Math.round((loanAmount * monthlyRate) / (1 - (1 / Math.pow((1 + monthlyRate), months))))
      return monthlyPayment;
    } else {
      return 0;
    }
  };

  const getIncome = () => {
    return Math.round(monthlyPayment / loan.incomePercent);
  }

  const loanAmount = getLoanAmount();
  const loanRate = getLoanRate();
  const monthlyPayment = getMonthlyPayment();
  const income = getIncome();

  return (
    <div className="form__offer offer">
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
      <button type="button" className="offer__checkout">Оформить заявку</button>
    </div>
  )
};

export default Offer;