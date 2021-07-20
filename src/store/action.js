export const ActionType = {
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`,
  SELECT_LOAN: `loan/selectLoan`,
  SET_COST_AMOUNT: `loan/setCostAmount`,
  SET_INITIAL_PAYMENT: `loan/setInitialPayment`,
  SET_LOAN_TERM: `loan/setLoanTerm`,
  SET_ADDITIONAL_CONDITION: `loan/setAdditionalCondition`,
  SET_LOAN_AMOUNT: `loan/setLoanAmount`,
  SET_RATE: `loan/setRate`,
  SET_MONTHLY_PAYMENT: `loan/setMonthlyPayment`,
  SET_INCOME: `loan/setIncome`,
  SET_APPLICATION_NUMBER: `loan/setApplicationNumber`,
  CREATE_APPLICATION: `application/createApplication`,
  OPEN_APPLICATION_SENT_POPUP: `applivation/openApplicationSentPopup`,
  CLOSE_APPLICATION_SENT_POPUP: `applivation/closeApplicationSentPopup`
};

export const ActionCreator = {
  openPopup: () => ({
    type: ActionType.OPEN_POPUP
  }),
  closePopup: () => ({
    type: ActionType.CLOSE_POPUP
  }),
  selectLoan: (activeLoanId) => ({
    type: ActionType.SELECT_LOAN,
    payload: activeLoanId
  }),
  setCostAmount: (costAmount) => ({
    type: ActionType.SET_COST_AMOUNT,
    payload: costAmount
  }),
  setInitialPayment: (initialPayment) => ({
    type: ActionType.SET_INITIAL_PAYMENT,
    payload: initialPayment
  }),
  setLoanTerm: (loanTerm) => ({
    type: ActionType.SET_LOAN_TERM,
    payload: loanTerm
  }),
  setAdditionalCondition: (condition) => ({
    type: ActionType.SET_ADDITIONAL_CONDITION,
    payload: condition
  }),
  setLoanAmount: (loanAmount) => ({
    type: ActionType.SET_LOAN_AMOUNT,
    payload: loanAmount
  }),
  setRate: (rate) => ({
    type: ActionType.SET_RATE,
    payload: rate
  }),
  setMonthlyPayment: (monthlyPayment) => ({
    type: ActionType.SET_MONTHLY_PAYMENT,
    payload: monthlyPayment
  }),
  setIncome: (income) => ({
    type: ActionType.SET_INCOME,
    payload: income
  }),
  setApplicationNumber: (number) => ({
    type: ActionType.SET_APPLICATION_NUMBER,
    payload: number
  }),
  createApplication: (status) => ({
    type: ActionType.CREATE_APPLICATION,
    payload: status
  }),
  openApplicationSentPopup: () => ({
    type: ActionType.OPEN_APPLICATION_SENT_POPUP
  }),
  closeApplicationSentPopup: () => ({
    type: ActionType.CLOSE_APPLICATION_SENT_POPUP
  }),
};