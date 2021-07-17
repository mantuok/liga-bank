export const ActionType = {
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`,
  SELECT_LOAN: `loan/selectLoan`,
  SET_COST_AMOUNT: `loan/setCostAmount`,
  SET_INITIAL_PAYMENT: `loan/setInitialPayment`,
  SET_LOAN_TERM: `loan/setLoanTerm`
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
  })
};