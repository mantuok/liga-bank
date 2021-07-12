import {ActionType} from './action';
import {promos} from '../mocks/promos';
import {services} from '../mocks/services';

const initialState = {
  popupToBeOpen: false,
  promos: promos,
  services: services
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