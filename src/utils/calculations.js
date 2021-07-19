import {
  LoanMeta,
  PERCENTS
} from '../const';

const loanMaternalCondition = LoanMeta.mortgage.AdditionalCondition.MATERNAL;
const loanLifeInsuranceCondition = LoanMeta.auto.AdditionalCondition.LIFE_INSURANCE;
const loanAutoInsuranceCondition = LoanMeta.auto.AdditionalCondition.AUTO_INSURANCE;

export const getLoanAmount = (loanType, costAmount, initialPayment, additionalConditions, loanConditions) => {
  let loanAmount = 0;
  switch (loanType) {
    case LoanMeta.mortgage.TYPE:
      if (additionalConditions.includes(loanMaternalCondition)) {
        loanAmount = costAmount - initialPayment - loanConditions[0].value;
      } else {
        loanAmount = costAmount - initialPayment;
      }
      return loanAmount;
    case LoanMeta.auto.TYPE:
      loanAmount = costAmount - initialPayment;
      return loanAmount;
  }
};

export const getRate = (loanType, initialPayment, costAmount, loan, additionalConditions, loanConditions) => {
  let rate = 0;
  switch (loanType) {
    case LoanMeta.mortgage.TYPE: 
      if (
        ((initialPayment / costAmount) < loan.rate.condition) ||
        (initialPayment === 0)
      ) {
        rate = loan.rate.rate1 * PERCENTS;
      } else {
        rate = loan.rate.rate2 * PERCENTS;
      }
    case LoanMeta.auto.TYPE:
      if ((
        additionalConditions.includes(loanLifeInsuranceCondition)) &&
        (additionalConditions.includes(loanAutoInsuranceCondition)))
       {
        rate = loan.rates.rate4
      } else if ((
        additionalConditions.includes(loanLifeInsuranceCondition)) ||
        (additionalConditions.includes(loanAutoInsuranceCondition)))
       {
        rate = loan.rates.rate3
      } else if (costAmount >= loan.rate.value) {
        rate = loan.rates.rate2
      } else if (costAmount < loan.rate.value) {
        rate = loan.rates.rate1
      }
      return rate;
  }
}