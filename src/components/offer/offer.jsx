import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  LoanMeta
} from '../../const';

const Offer = () => {
  const costAmount = useSelector((state) => state.costAmount);
  const loan = useSelector((state) => state.activeLoan);
  const loanType = loan.type;
  const loanTerm = useSelector((state) => state.loanTerm);
  const initialPayment = useSelector((state) => state.initialPayment);
  const additionalConditions = useSelector((state) => state.additionalConditions)

  const getLoanAmount = () => {
    // debugger
    let loanAmount = 0;
    if (additionalConditions.includes(LoanMeta[loanType].AdditionalCondition.MATERNAL)) {
      loanAmount = costAmount - initialPayment - loan.additionalConditions[0].value;
    } else {
      loanAmount = costAmount - initialPayment
    }
    return loanAmount;
  }

  return (
    <div className="form__offer offer">
      <ul className="offer__list">
        <li className="offer__item">
          <span className="offer__value">{getLoanAmount()}</span>
          <span className="offer__label">{LoanMeta[loanType].LOAN_AMOUNT_LABEL}</span>
        </li>
      </ul>
      <button type="button" className="offer__checkout">Оформить заявку</button>
    </div>
  )
};

export default Offer;