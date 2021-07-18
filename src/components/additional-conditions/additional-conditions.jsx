import React from 'react';
import {useSelector} from 'react-redux';
import {nanoid} from 'nanoid'
import AdditionalCondition from '../additional-condition/additional-condition';

const AdditionalConditions = () => {
  const loan = useSelector((state) => state.activeLoan);
  const loanAdditionalConditions = loan.additionalConditions; 

  const renderAdditionalConditions = () => {
    return loanAdditionalConditions.map((condition) => {
      return <AdditionalCondition
        key={nanoid()}
        condition={condition}
        />
    })
  }
  return (
    <div className="form__additional-conditions additional-conditions">
      {renderAdditionalConditions()}
    </div>
  )
};

export default AdditionalConditions;