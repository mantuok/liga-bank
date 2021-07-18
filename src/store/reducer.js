import {ActionType} from './action';
import {promos} from '../mocks/promos';
import {services} from '../mocks/services';
import {loans} from '../mocks/loans';

const initialState = {
  popupToBeOpen: false,
  promos: promos,
  services: services,
  loans: loans,
  activeLoan: undefined,
  costAmount: 0,
  initialPayment: 0,
  loanTerm: 1,
  additionalConditions: []
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
    case ActionType.SELECT_LOAN: 
      return {
        ...state,
        activeLoan: action.payload
      }
    case ActionType.SET_COST_AMOUNT:
      return {
        ...state,
        costAmount: action.payload
      }
    case ActionType.SET_INITIAL_PAYMENT:
      return {
        ...state,
        initialPayment: action.payload
      }
    case ActionType.SET_LOAN_TERM:
      return {
        ...state,
        loanTerm: action.payload
      }
    case ActionType.SET_ADDITIONAL_CONDITION:
      return {
        ...state,
        additionalConditions: action.payload
      }
    default:
      return state
  }
};

export {reducer};