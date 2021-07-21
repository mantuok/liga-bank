import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from 'nanoid'
import {ActionCreator} from '../../store/action';

const AdditionalCondition = (props) => {
  const {condition} = props;
  const dispatch = useDispatch();
  const additionalConditions = useSelector((state) => state.additionalConditions);
  let changedConditions = additionalConditions.slice();
  const conditionCheckBox = useRef();

  const [checkboxData, setCheckboxData] = useState({
    status: false
  })

  const addCondition = (currentCondition) => {
    changedConditions.push(currentCondition);
    // additionalConditions.push(currentCondition);
    onAdditionalConditionChange(changedConditions);
  }

  const removeCondition = (currentCondition) => {
    changedConditions = additionalConditions.filter((condition) => condition !== currentCondition);
    onAdditionalConditionChange(changedConditions);
  }

  const handleAdditionalConditionChange = (evt) => {
    const currentCondition = evt.target.name;
    if (conditionCheckBox.current.checked) {
      setCheckboxData({status: true});
      addCondition(currentCondition);
    } else if (!conditionCheckBox.current.checked) {
      setCheckboxData({status: false});
      removeCondition(currentCondition);
    }
  }
  
  const onAdditionalConditionChange = (conditions) => {
    dispatch(ActionCreator.setAdditionalCondition(conditions))
  };

  return (
    <div 
      className="additional-conditions__additional-condition additional-condition"
      key={nanoid()}
    >
      <input 
        className="additional-condition__input" 
        type="checkbox"
        id={condition.name}
        name={condition.name}
        ref={conditionCheckBox}
        checked={checkboxData.status}
        onChange={handleAdditionalConditionChange}
      />
      <label className="additional-condition__label" htmlFor={condition.name}>{condition.label}</label>
    </div>
  )
};

export default AdditionalCondition;