import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  InputButtonType
} from '../../const';

const CostAmount = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    value: '',
    isValid: true 
  });

  const loan = useSelector((state) => state.activeLoan);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const getInvalidPlaceholder = () => inputData.isValid ? `` : `Error`

  const handleCostAmountChange = (evt) => {
    setInputData({
      ...inputData,
      value: parseInt(evt.target.value),
      isValid: true
    })
  };

  const isCostAmountValid = () => {
    if ((inputData.value < loan.minCost) || (inputData.value > loan.maxCost)) {
      setInputData({
        ...inputData,
        value: ``,
        isValid: false
      });
    }
    return inputData.isValid
  }

  const handleCostAmountBlur = () => {
    if (isCostAmountValid()) {
      onInputBlur(inputData.value);
    }
  };

  const onInputBlur = (value) => {
    dispatch(ActionCreator.setCostAmount(value))
  };


  // const getUpdatedInputValue = (clickType) => {
  //   // debugger
  //   switch (clickType) {
  //     case InputButtonType.MINUS:
  //       return (inputData.value - LoanMeta[loanType].COST_STEP);
  //     case (InputButtonType.PLUS):
  //       return getIncreasedInputValue();
  //     default:
  //       return inputData.value;
  //   } 
  // };

  const getUpdatedInputValue = (clickType) => {
    // debugger
    switch (clickType) {
      case InputButtonType.MINUS:
        return (inputData.value - LoanMeta[loanType].COST_STEP)
      case InputButtonType.PLUS:
        return (inputData.value + LoanMeta[loanType].COST_STEP)
      default:
        return costAmount
    } 
  };

  const handleButtonClick = (clickType) => {
    const updatedInputValue = parseInt(getUpdatedInputValue(clickType));
    setInputData({
      ...inputData,
      value: updatedInputValue,
      isValid: true
    })    
    if (isCostAmountValid()) {
     onInputBlur(updatedInputValue);
    }
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
          placeholder={getInvalidPlaceholder()}
          value={inputData.value}
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