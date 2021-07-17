import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Range} from 'react-range';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta
} from '../../const';

const InitialPayment = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const initialPayment = useSelector((state) => state.initialPayment);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const PERCENTS = 100;
  const StateName = {
    AMOUNT: `amount`,
    PERCENT: `percent`
  }

  const [inputData, setInputData] = useState({
    amount: costAmount * loan.initialPaymentMin,
    percent: [loan.initialPaymentMin]
  });

  const setUpdatedState = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value
    })
  };

  useEffect(() => {
    const changedAmount = Math.round((costAmount * inputData.percent) / PERCENTS);
    setUpdatedState(StateName.AMOUNT, changedAmount);
    onInitialPaymentChange(changedAmount);
  }, [costAmount]);

  useEffect(() => {
    const changedPercent = [getValidPercents((initialPayment / costAmount) * PERCENTS)];
    setUpdatedState(StateName.PERCENT, changedPercent);
  }, [initialPayment]);

  useEffect(() => {
    const changedAmount = Math.round((costAmount * inputData.percent) / PERCENTS);
    setUpdatedState(StateName.AMOUNT, changedAmount);
    onInitialPaymentChange(changedAmount);
  }, [inputData.percent]);
    

  const getValidPercents = (percents) => {
    if (costAmount === 0) {
      return loan.initialPaymentMin
    } else if (percents < loan.initialPaymentMin) {
      return loan.initialPaymentMin;
    } else if (percents > loan.initialPaymentMax) {
      return  loan.initialPaymentMax;
    }
    return percents;
  }

  const handleCostAmountChange = (evt) => {
    setInputData({
      ...inputData,
      amount: parseInt(evt.target.value)
    })
  };

  const handleCostAmountBlur = () => {
    onInitialPaymentChange(inputData.amount);
  };

  const onInitialPaymentChange = (amount) => {
    dispatch(ActionCreator.setInitialPayment(amount))
  };

  return (
    <div className="form__initial-payment initial-payment">
    <label className="initial-payment__label" htmlFor="initial-payment">{LoanMeta[loanType].INITIAL_PAYMENT_LABEL}</label>
    <div className="initial-payment__input-wrapper">
      <input 
        className="initial-payment__input" 
        type="number" 
        name="initial-payment" 
        id="cost-amount"
        value={inputData.amount}
        onChange={handleCostAmountChange}
        onBlur={handleCostAmountBlur}
      />
      <Range
        step={LoanMeta[loanType].INITIAL_PAYMENT_STEP}
        min={loan.initialPaymentMin}
        max={loan.initialPaymentMax}
        values={inputData.percent}
        onChange={(values) => setInputData({...inputData, percent: values})}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '1px',
              width: '100%',
              backgroundColor: '#C1C2CA'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: '#2C36F2',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '-28px',
                color: '#707C87',
                fontWeight: '400',
                fontSize: '14px',
                fontFamily: 'inherit',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#FFFFFF'
              }}
            >
              {inputData.percent[0].toFixed(1)}
            </div>
          </div>
        )}
      />  
    </div>
  </div>
  )
};

export default InitialPayment;