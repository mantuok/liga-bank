import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from 'nanoid'
import classNames from 'classnames';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta
} from '../../const';
import AdditionalCondition from '../additional-condition/additional-condition';

const AdditionalConditions = () => {
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.activeLoan);
  const loanAdditionalConditions = loan.additionalConditions; 
  const loanType = loan.type;

  // const conditionCheckBox = useRef()

  // const additionalConditionClass = classNames(
  //   `additional-condition__wrapper additional-condition--${condition.name}`
  // );

  // const renderAdditionalConditions = () => {
  //   return loanAdditionalConditions.map((condition) => {
  //     return (
  //       <div 
  //         className="additional-condition__wrapper"
  //         key={nanoid()}
  //       >
  //         <input 
  //           className="additional-condition__input" 
  //           type="checkbox"
  //           id={condition.name}
  //           name={condition.name}
  //           ref={conditionCheckBox}
  //           onClick={handleAdditionalConditionClick}
  //         />
  //         <label className="additional-condition__label" htmlFor="additional-condition">{condition.label}</label>
  //       </div>
  //     )
  //   })
  // }
    const renderAdditionalConditions = () => {
    return loanAdditionalConditions.map((condition) => {
      return <AdditionalCondition
        key={nanoid()}
        condition={condition}
       />
    })
  }

//   const handleAdditionalConditionClick = (evt) => {
//   // debugger
//   const currentCondition = evt.target.name;
//   const selectedConditions = [];
//   if (conditionCheckBox.current.checked) {
//     selectedConditions.push(currentCondition);
//   } else if (!conditionCheckBox.current.checked) {
//     selectedConditions.filter((condition) => condition !== selectedConditions)
//   }
//   console.log(selectedConditions);
//   console.log(conditionCheckBox.current)
// };

// const onAdditionalConditionChange = () => {
//   dispatch(ActionCreator.setAdditionalCondition())
// }

  return (
    <div className="form__additional-conditions additional-conditions">
      {renderAdditionalConditions()}
    </div>
  )
};

export default AdditionalConditions;