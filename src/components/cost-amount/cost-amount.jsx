import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  InputButtonType
} from '../../const';

const CostAmount = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    current: `` 
  })

  const loan = useSelector((state) => state.activeLoan);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const handleCostAmountChange = (evt) => {
    setInputValue({
      ...inputValue,
      current: evt.target.value
    })
  };

  const handleCostAmountBlur = (evt) => {
    const enteredCostAmount = parseInt(evt.target.value);
    onInputBlur(enteredCostAmount)
  };

  const onInputBlur = (value) => {
    dispatch(ActionCreator.setCostAmount(value))
  };

  const getUpdatedCostAmount = (clickType) => {
    switch (clickType) {
      case InputButtonType.MINUS:
        return (costAmount - LoanMeta[loanType].COST_STEP)
      case InputButtonType.PLUS:
        return (costAmount + LoanMeta[loanType].COST_STEP)
      default:
        return costAmount
    } 
  };

  const handleButtonClick = (clickType) => {
    const updatedCostAmount = getUpdatedCostAmount(clickType);
    onInputBlur(updatedCostAmount);
  };

  return (
    <div className="form__cost-amount cost-amount">
      <label className="cost-amount__label" htmlFor="cost-amount">{LoanMeta[loanType].COST_AMOUNT_LABEL}</label>
      <div className="cost-amount__input-wrapper">
        <button 
          className="cost-amount__button cost-amount__button--minus"
          type="button"
          onClick={() => handleButtonClick(InputButtonType.MINUS)}
        >
          <span className="visually-hidden">{`Увеличить на ${LoanMeta[loanType].COST_STEP}`}</span>
        </button>
        <input 
          className="cost-amount__input" 
          type="number" 
          name="cost-amount" 
          id="cost-amount"
          value={costAmount}
          onChange={handleCostAmountChange}
          onBlur={handleCostAmountBlur}
        />
        <button 
          className="cost-amount__button cost-amount__button--plus"
          type="button"
          onClick={() => handleButtonClick(InputButtonType.PLUS)}
        >
          <span className="visually-hidden">{`Уменьшить на ${LoanMeta[loanType].COST_STEP}`}</span>
        </button>
      </div>
      <span className="cost-amount__hint">От {loan.minCost} до {loan.maxCost} рублей</span>
    </div>
  )
};

export default CostAmount;