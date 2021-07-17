import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Range} from 'react-range';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta
} from '../../const';

const LoanTerm = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const initialPayment = useSelector((state) => state.initialPayment);
  const costAmount = useSelector((state) => state.costAmount);
  const loanType = loan.type;

  const [inputData, setInputData] = useState({
    years: [loan.termMin]
  });

  return (
    <div className="form__loan-term loan-term">
      <label className="loan-term__label" htmlFor="loan-term">{LoanMeta[loanType].INITIAL_PAYMENT_LABEL}</label>
      <div className="loan-term__input-wrapper">
        <input 
          className="loan-term__input" 
          type="number" 
          name="loan-term" 
          id="loan-term"
          // value={inputData.amount}
          // onChange={handleCostAmountChange}
          // onBlur={handleCostAmountBlur}
        />
        <Range
          step={LoanMeta[loanType].TERM_STEP}
          min={loan.termMin}
          max={loan.termMax}
          // min={1}
          // max={100}
          values={inputData.years}
          onChange={(values) => setInputData({...inputData, years: values})}
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
                {inputData.years[0].toFixed(1)}
              </div>
            </div>
          )}
        />  
      </div>
    </div>
  )
};

export default LoanTerm;