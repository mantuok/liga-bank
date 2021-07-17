import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {Range, getTrackBackground} from 'react-range';
// import Slider, {createSliderWithTooltip, SliderTooltip} from 'rc-slider';
// import 'rc-slider/assets/index.css';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
  SliderStyle
} from '../../const';

const InitialPayment = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const InitialPayment = useSelector((state) => state.initialPayment);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const getInitialValue = () => {
    console.log(costAmount)
    return costAmount * loan.initialPaymentMin
  };

  const [inputData, setInputData] = useState({
    amount: costAmount * loan.initialPaymentMin,
    percent: [10],
    isValid: true 
  });

  useEffect(() => {
    setInputData({
      ...inputData,
      amount: costAmount * loan.initialPaymentMin
    })
  }, [costAmount]);

     
  // console.log(LoanMeta[loanType].INITIAL_PAYMENT_STEP)
  // console.log(loan.initialPaymentMin)
  // console.log(loan.initialPaymentMax)
          // step={LoanMeta[loanType].INITIAL_PAYMENT_STEP}
        // min={loan.initialPaymentMin}
        // max={loan.initialPaymentMax}
 

  // const InitialPaymentSlider = createSliderWithTooltip(Slider)

  return (
    <div className="form__initial-payment initial-payment">
    <label className="initial-payment__label" htmlFor="initial-payment">{LoanMeta[loanType].INITIAL_PAYMENT_LABEL}</label>
    <div className="initial-payment__input-wrapper">
      <input 
        className="initial-payment__input" 
        type="number" 
        name="initial-payment" 
        id="cost-amount"
        // placeholder={getInvalidPlaceholder()}
        // value={inputData.value}
        // onChange={handleCostAmountChange}
        // onBlur={handleCostAmountBlur}
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
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
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
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '-28px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#548BF4'
              }}
            >
              {inputData.percent[0].toFixed(1)}
            </div>
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
            />
          </div>
        )}
      />  
    </div>
  </div>
  )
};

export default InitialPayment;