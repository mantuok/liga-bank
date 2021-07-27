import {
  LoanMeta,
  PERCENTS
} from '../const';

const loanMaternalCondition = LoanMeta.mortgage.AdditionalCondition.MATERNAL;
const loanLifeInsuranceCondition = LoanMeta.auto.AdditionalCondition.LIFE_INSURANCE;
const loanAutoInsuranceCondition = LoanMeta.auto.AdditionalCondition.AUTO_INSURANCE;

const roundToDecimal = (number) => (Math.round(number * 10)) / 10

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
    default: 
      return
  }
};

export const getLoanRate = (loanType, loanRate, loanConditions, costAmount, initialPayment, additionalConditions) => {
  let rate = 0;
  switch (loanType) {
    case LoanMeta.mortgage.TYPE: 
      if (
        ((initialPayment / costAmount) < loanRate.condition) ||
        (initialPayment === 0)
      ) {
        rate = loanRate.rate1 * PERCENTS;
      } else {
        rate = loanRate.rate2 * PERCENTS;
      }
      return roundToDecimal(rate);
    case LoanMeta.auto.TYPE:
      if ((
        additionalConditions.includes(loanLifeInsuranceCondition)) &&
        (additionalConditions.includes(loanAutoInsuranceCondition)))
       {
        rate = loanRate.rate4 * PERCENTS
      } else if ((
        additionalConditions.includes(loanLifeInsuranceCondition)) ||
        (additionalConditions.includes(loanAutoInsuranceCondition)))
       {
        rate = loanRate.rate3 * PERCENTS
      } else if (costAmount >= loanRate.condition) {
        rate = loanRate.rate2 * PERCENTS
      } else if (costAmount < loanRate.condition) {
        rate = loanRate.rate1 * PERCENTS
      }
      return roundToDecimal(rate);
    default:
      return
  }
};

export const getMonthlyPayment = (loanAmount, loanRate, loanTerm) => {
  if (loanAmount !== 0) {
    const monthlyRate = loanRate / (12 * 100);
    const months = loanTerm * 12;
    const monthlyPayment = Math.round((loanAmount * monthlyRate) / (1 - (1 / Math.pow((1 + monthlyRate), months))))
    return monthlyPayment;
  } else {
    return 0;
  }
};

export const getIncome = (monthlyPayment, loanIncomePercent) => {
  return Math.round(monthlyPayment / loanIncomePercent);
}