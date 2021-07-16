import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  InputButtonType,
  InputError
} from '../../const';

const CostAmount = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUE = 0;
  const [inputData, setInputData] = useState({
    value: '',
    isValid: true 
  });

  const loan = useSelector((state) => state.activeLoan);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const getInvalidPlaceholder = () => inputData.isValid ? `` : InputError.TEXT;
  const inputClass = classNames(`cost-amount__input`, {"cost-amount__input--invalid" : !inputData.isValid});

  const getIncreasedInputValue = () => {
    // debugger
    if (inputData.value >= loan.minCost) {
      return (inputData.value + LoanMeta[loanType].COST_STEP)
    } 
    return loan.minCost;
  }

  const getUpdatedInputValue = (clickType) => {
    // debugger
    switch (clickType) {
      case InputButtonType.MINUS:
        return (inputData.value - LoanMeta[loanType].COST_STEP);
      case InputButtonType.PLUS:
        return getIncreasedInputValue();
      default:
        return inputData.value;
    } 
  };

  const handleCostAmountChange = (evt) => {
    if ((evt.target.value < loan.minCost) || (evt.target.value > loan.maxCost)) {
      return setInputData({
        ...inputData,
        value: parseInt(evt.target.value),
        isValid: false
      });
    }
    setInputData({
      ...inputData,
      value: parseInt(evt.target.value),
      isValid: true
    })
  };

  // const isCostAmountValid = (currentCostAmount) => {
  //   if ((currentCostAmount < loan.minCost) || (currentCostAmount > loan.maxCost)) {
  //     setInputData({
  //       ...inputData,
  //       value: ``,
  //       isValid: false
  //     });
  //   }
  //   return inputData.isValid
  // }

  const isCostAmountValid = (currentCostAmount) => {
    if ((currentCostAmount < loan.minCost) || (currentCostAmount > loan.maxCost)) {
      setInputData({
        ...inputData,
        value: ``,
        isValid: false
      });
    }
    return inputData.isValid
  }


  // const handleCostAmountBlur = () => {
  //   // debugger
  //   if (isCostAmountValid(inputData.value)) {
  //     onInputBlur(inputData.value);
  //   }
  // };

  const handleCostAmountBlur = () => {
    // debugger
    if (!inputData.isValid) {
      setInputData({
        ...inputData,
        value: ``
      });
      onInputBlur(INITIAL_VALUE)
    } else {
      onInputBlur(inputData.value);
    }
  };

  // const handleCostAmountBlur = () => {
  //   if (inputData.isValid) {
  //     onInputBlur(inputData.value);
  //   }
  // };

  const onInputBlur = (value) => {
    dispatch(ActionCreator.setCostAmount(value))
  };




  // const getUpdatedInputValue = (clickType) => {
  //   // debugger
  //   switch (clickType) {
  //     case InputButtonType.MINUS:
  //       return (inputData.value - LoanMeta[loanType].COST_STEP)
  //     case InputButtonType.PLUS:
  //       return (inputData.value + LoanMeta[loanType].COST_STEP)
  //     default:
  //       return costAmount
  //   } 
  // };

  const handleButtonClick = (clickType) => {
    const updatedInputValue = parseInt(getUpdatedInputValue(clickType));
    console.log(updatedInputValue)
    if ((updatedInputValue < loan.minCost) || (updatedInputValue > loan.maxCost)) {
      setInputData({
        ...inputData,
        value: ``,
        isValid: false
      });
    } else {
      setInputData({
        ...inputData,
        value: parseInt(updatedInputValue),
        isValid: true
      });
      onInputBlur(updatedInputValue)
    }
    // setInputData({
    //   ...inputData,
    //   value: updatedInputValue,
    //   isValid: true
    // }) ;
    // onInputBlur(updatedInputValue);   
    // if (inputData.isValid) {
    //   onInputBlur(updatedInputValue);
    // }
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
          className={inputClass} 
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