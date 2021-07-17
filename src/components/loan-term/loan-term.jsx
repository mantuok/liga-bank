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
  const loanTerm = useSelector((state) => state.loanTerm);
  const loanType = loan.type;

  const StateName = {
    TYPED_YEARS: `typedYears`,
    RANGE_YEARS: `rangeYears`
  }

  const [inputData, setInputData] = useState({
    typedYears: loan.termMin,
    rangeYears: [loan.termMin]
  });

  const setUpdatedState = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value
    })
  };

  useEffect(() => {
    const changedYears = [getValidYears(loanTerm)];
    setUpdatedState(StateName.RANGE_YEARS, changedYears);
  }, [loanTerm]);

  useEffect(() => {
    const changedYears = inputData.rangeYears[0];
    setUpdatedState(StateName.TYPED_YEARS, changedYears);
    onLoanTermChange(changedYears);
  }, [inputData.rangeYears]);

  const getValidYears = (years) => {
    if (years < loan.termMin) {
      return loan.termMin;
    } else if (years > loan.termMax) {
      return  loan.termMax;
    }
    return years;
  }

  const handleLoanTermChange = (evt) => {
    const changedYears = parseInt(evt.target.value);
    setUpdatedState(StateName.TYPED_YEARS, changedYears);
  };

  const handleLoanTermBlur = () => {
    onLoanTermChange(inputData.typedYears);
  }

  const onLoanTermChange = (years) => {
    dispatch(ActionCreator.setLoanTerm(years));
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
          onChange={(values) => setInputData({...inputData, rangeYears: values})}
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