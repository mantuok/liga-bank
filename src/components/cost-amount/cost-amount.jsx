import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  InputButtonType,
  InputError
} from '../../const';
import {
  getRubleSuffix,
  getSeparatedNumber
} from '../../utils/common';

const CostAmount = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const initialValue = useSelector((state) => state.costAmount)
  const loanType = loan.type;
  const INITIAL_VALUE = 0;
  const [inputData, setInputData] = useState({
    value: initialValue,
    isValid: true 
  });

  const getInvalidPlaceholder = () => inputData.isValid ? `` : InputError.TEXT;

  const inputClass = classNames(`cost-amount__input`, {"cost-amount__input--invalid" : !inputData.isValid});

  const setUpdatedState = (value = inputData.value, status = inputData.isValid) => {
    setInputData({
      ...inputData,
      value: value,
      isValid: status
    })
  };

  const getIncreasedInputValue = () => {
    if (inputData.value >= loan.minCost) {
      return (inputData.value + LoanMeta[loanType].COST_STEP)
    } 
    return loan.minCost;
  };

  const getUpdatedInputValue = (clickType) => {
    switch (clickType) {
      case InputButtonType.MINUS:
        return (inputData.value - LoanMeta[loanType].COST_STEP);
      case InputButtonType.PLUS:
        return getIncreasedInputValue();
      default:
        return inputData.value;
    } 
  };

  const handleCostAmountChange = (value) => {
    const enteredValue = parseInt(value.value);
    if ((enteredValue < loan.minCost) || 
        (enteredValue > loan.maxCost) ||
        (isNaN(enteredValue))
        ) {
      return setUpdatedState(enteredValue, false)
    };
    setUpdatedState(enteredValue, true)
  };

  const handleCostAmountBlur = () => {
    if (!inputData.isValid) {
      setUpdatedState(``)
      onCostAmountChange(INITIAL_VALUE)
    } else {
      onCostAmountChange(inputData.value);
    }
  };

  const handleButtonClick = (clickType) => {
    const updatedInputValue = parseInt(getUpdatedInputValue(clickType));
    if ((updatedInputValue < loan.minCost) || 
        (updatedInputValue > loan.maxCost) ||
        (isNaN(updatedInputValue))
      ) {
      setUpdatedState(``, false)
      onCostAmountChange(INITIAL_VALUE)
    } else {
      setUpdatedState(updatedInputValue, true)
      onCostAmountChange(updatedInputValue)
    }
  };

  const onCostAmountChange = (value) => {
    dispatch(ActionCreator.setCostAmount(value))
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
        <NumberFormat 
          className={inputClass}  
          name="cost-amount" 
          id="cost-amount"
          placeholder={getInvalidPlaceholder()}
          thousandSeparator=" "
          suffix={getRubleSuffix(inputData.value)}
          value={inputData.value}
          onValueChange={handleCostAmountChange}
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
      <span className="cost-amount__hint">
        От {getSeparatedNumber(loan.minCost)} {getRubleSuffix(loan.minCost)} до {getSeparatedNumber(loan.maxCost)} {getRubleSuffix(loan.maxCost)}
      </span>
    </div>
  )
};

export default CostAmount;