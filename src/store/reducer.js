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
  costAmountUpdated: true,
  initialPayment: 0,
  loanTerm: 1,
  additionalConditions: [],
  loanAmount: 0,
  rate: 0,
  monthlyPayment: 0,
  income: 0
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
        costAmount: action.payload,
        costAmountUpdated: true
      }
    case ActionType.SET_INITIAL_PAYMENT:
      return {
        ...state,
        initialPayment: action.payload,
        costAmountUpdated: false
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
    case ActionType.SET_LOAN_AMOUNT:
      return {
        ...state,
        loanAmount: action.payload
      }
    case ActionType.SET_RATE:
      return {
        ...state,
        rate: action.payload
      }
    case ActionType.SET_MONTHLY_PAYMENT:
      return {
        ...state,
        monthlyPayment: action.payload
      }
    case ActionType.SET_INCOME:
      return {
        ...state,
        income: action.payload
      }
    default:
      return state
  }
};

export {reducer};