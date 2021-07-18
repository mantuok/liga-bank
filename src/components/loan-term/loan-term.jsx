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
  const loanType = loan.type;

  const [inputData, setInputData] = useState({
    typedYears: loan.termMin,
    rangeYears: [loan.termMin]
  });

  useEffect(() => {
    const onLoanTermChange = (years) => {
      dispatch(ActionCreator.setLoanTerm(years));
    };
    onLoanTermChange(inputData.rangeYears[0])
  }, [dispatch, inputData.rangeYears]);

  const getValidYears = (years) => {
    if (years < loan.termMin) {
      return loan.termMin;
    } else if (years > loan.termMax) {
      return  loan.termMax;
    }
    return years;
  }

  const handleLoanTermChange = (evt) => {
    const changedYears = parseInt(evt.target.value) || 0;
    setInputData({...inputData, typedYears: changedYears})
  };

  const handleLoanTermBlur = () => {
    const changedYears = getValidYears(inputData.typedYears)
    setInputData({
      typedYears: changedYears,
      rangeYears: [changedYears]
    })
  };

  return (
    <div className="form__loan-term loan-term">
      <label className="loan-term__label" htmlFor="loan-term">{LoanMeta[loanType].LOAN_TERM_LABEL}</label>
      <div className="loan-term__input-wrapper">
        <input 
          className="loan-term__input" 
          type="number" 
          name="loan-term" 
          id="loan-term"
          value={inputData.typedYears}
          onChange={handleLoanTermChange}
          onBlur={handleLoanTermBlur}
        />
        <Range
          step={LoanMeta[loanType].TERM_STEP}
          min={loan.termMin}
          max={loan.termMax}
          values={inputData.rangeYears}
          onChange={(values) => setInputData({...inputData, rangeYears: values, typedYears: values[0]})}
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
                {inputData.rangeYears[0].toFixed(1)}
              </div>
            </div>
          )}
        />  
        <span className="loan-term__range loan-term__range--min">{loan.termMin}</span>
        <span className="loan-term__range loan-term__range--max">{loan.termMax}</span>
      </div>
    </div>
  )
};

export default LoanTerm;