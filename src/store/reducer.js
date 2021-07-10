import {ActionType} from './action';
import {promos} from '../mocks/promos';

const initialState = {
  popupToBeOpen: false,
  promos: promos
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_POPUP: 
      return {
        ...state,
        popupToBeOpen: true
      }
    case ActionType.CLOSE_POPUP: 
      return {
        ...state,
        popupToBeOpen: false
      }
    default:
      return state
  }
};

export {reducer};