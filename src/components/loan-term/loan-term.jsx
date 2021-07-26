import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Range} from 'react-range';
import NumberFormat from 'react-number-format';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta
} from '../../const';
import { 
  getYearSuffix 
} from '../../utils/common';

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

  const handleLoanTermChange = (value) => {
    const changedYears = parseInt(value.value) || 0;
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
      <label className="loan-term__label" htmlFor="loan-term">{LoanMeta[loanType].TERM_LABEL}</label>
      <div className="loan-term__input-wrapper">
        <NumberFormat 
          className="loan-term__input" 
          name="loan-term" 
          id="loan-term" 
          thousandSeparator=" "
          suffix={getYearSuffix(inputData.typedYears)}
          value={inputData.typedYears}
          onValueChange={handleLoanTermChange}
          onBlur={handleLoanTermBlur}
        />
        <div className="loan-term__range">
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
                  height: '14px',
                  width: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#2C36F2',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
              </div>
            )}
          />
        </div>
        <div className="loan-term__hint-wrapper">
          <span className="loan-term__range loan-term__hint loan-term__hint--min">{loan.termMin + getYearSuffix(loan.termMin)}</span>
          <span className="loan-term__range loan-term__hint loan-term__hint--max">{loan.termMax + getYearSuffix(loan.termMax)}</span>
        </div>  
      </div>
    </div>
  )
};

export default LoanTerm;