import {ActionType} from './action';
import {promos} from '../mocks/promos';
import {services} from '../mocks/services';
import {loans} from '../mocks/loans';
import {branches} from '../mocks/branches';

const initialState = {
  popupToBeOpen: false,
  promos: promos,
  services: services,
  loans: loans,
  branches: branches,
  activeLoan: undefined,
  costAmount: 1200000,
  costAmountUpdated: false,
  initialPayment: 0,
  loanTerm: 1,
  additionalConditions: [],
  loanAmount: 0,
  rate: 0,
  monthlyPayment: 0,
  income: 0,
  applicationNumber: 0,
  isApplicationToBeCreated: false,
  applicationSentPopupToBeOpen: false,
  isloanDataToBeCleared: false
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
    case ActionType.CLEAR_LOAN_DATA: 
      return {
        ...state,
        isloanDataToBeCleared: true,
        costAmount: 0,
        initialPayment: 0,
        loanTerm: 1,
        additionalConditions: [],
        loanAmount: 0,
        rate: 0,
        monthlyPayment: 0,
        income: 0
      }
    case ActionType.SET_APPLICATION_NUMBER:
      return {
        ...state,
        applicationNumber: action.payload
      }
    case ActionType.CREATE_APPLICATION:
      return {
        ...state,
        isApplicationToBeCreated: action.payload
      }
    case ActionType.OPEN_APPLICATION_SENT_POPUP: 
      return {
        ...state,
        applicationSentPopupToBeOpen: true
      }
    case ActionType.CLOSE_APPLICATION_SENT_POPUP: 
      return {
        ...state,
        applicationSentPopupToBeOpen: false
      }
    case ActionType.SET_LOAN_DATA_IS_CLEARED:
      return {
        ...state,
        isloanDataToBeCleared: false
      }
    default:
      return state
  }
};

export {reducer};