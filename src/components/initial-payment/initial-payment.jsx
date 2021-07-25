import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Range} from 'react-range';
import NumberFormat from 'react-number-format';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  PERCENTS
} from '../../const';
import {
  getRubleSuffix
} from '../../utils/common';

const InitialPayment = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const costAmountUpdated = useSelector((state) => state.costAmountUpdated);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const [inputData, setInputData] = useState({
    amount: costAmount * loan.initialPaymentMin,
    percent: [loan.initialPaymentMin],
    isUpdatedToCostAmount: false
  });

  // const updateAmountToCostAmount = () => {
  //   setInputData({
  //     ...inputData,
  //     amount: Math.round((costAmount * inputData.percent) / PERCENTS),
  //   });
  // }

  useEffect(() => {
    dispatch(ActionCreator.setInitialPayment(inputData.amount))
  }, [dispatch, inputData.amount]);

  useEffect(() => {
    if (costAmountUpdated) {
      setInputData({
        ...inputData,
        amount: Math.round((costAmount * inputData.percent) / PERCENTS),
      });
    }
  }, [costAmountUpdated, costAmount]);
    
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

  const handleInitialPaymentChange = (value) => {
    const changedAmount = parseInt(value.value);
    setInputData({...inputData, amount: changedAmount})
  };

  const handleInitialPaymentBlur = () => {
    const changedPercent = [getValidPercents((inputData.amount / costAmount) * PERCENTS)];
    const changedAmount = Math.round((costAmount * changedPercent) / PERCENTS);
    setInputData({
      amount: changedAmount,
      percent: changedPercent
    })
  };

  return (
    <div className="form__initial-payment initial-payment">
    <label className="initial-payment__label" htmlFor="initial-payment">{LoanMeta[loanType].INITIAL_PAYMENT_LABEL}</label>
    <div className="initial-payment__input-wrapper">
      <NumberFormat 
        className="initial-payment__input" 
        name="initial-payment" 
        id="initial-payment" 
        thousandSeparator=" "
        suffix={getRubleSuffix(inputData.amount)}
        value={inputData.amount}
        onValueChange={handleInitialPaymentChange}
        onBlur={handleInitialPaymentBlur}
      />
      <div className="initial-payment__range">
        <Range
          step={LoanMeta[loanType].INITIAL_PAYMENT_STEP}
          min={loan.initialPaymentMin}
          max={loan.initialPaymentMax}
          values={inputData.percent}
          onChange={(values) => setInputData({...inputData, amount: (Math.round((costAmount * values[0]) / PERCENTS)), percent: values})}
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
                height: '14px',
                width: '14px',
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
                  width: '60px',
                  color: '#707C87',
                  fontWeight: '400',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  textAlign: 'center',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {inputData.percent[0].toFixed(0) + `%`}
              </div>
            </div>
          )}
        />  
      </div>
    </div>
  </div>
  )
};

export default InitialPayment;