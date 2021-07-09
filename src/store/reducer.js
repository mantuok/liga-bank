import {ActionType} from './action';

const initialState = {
  popupToBeOpen: false
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