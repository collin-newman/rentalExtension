window.re = window.re || {};

window.re.evaluateUnit = (purchasePrice, monthlyRent) => {
  // Acquisition Costs
  const downPayment = purchasePrice * 0.25;
  const closingCosts = 0.03 * purchasePrice;
  const renovationCosts = 0.01 * purchasePrice;
  const totalAcquisitionCosts = downPayment + closingCosts + renovationCosts;
  const loanAmount = purchasePrice - downPayment;

  // Rental Income
  const vacancyRate = 0.05;
  const monthlyVacancyCost = monthlyRent * vacancyRate;
  const managementRate = 0.1;
  const monthlyManagementCost = monthlyRent * managementRate;
  const effectiveMonthlyRent =
    monthlyRent - monthlyVacancyCost - monthlyManagementCost;

  // Operating Expenses
  const hoa = 20;
  const propertyTaxes = 0.0098 * purchasePrice;
  const insurance = 0.005 * purchasePrice;
  const maintenance = 0.0075 * purchasePrice;
  const capEx = 0.0075 * purchasePrice;
  const utilities = 0;
  const other = 0;
  const totalAnualOperatingExpenses =
    hoa + propertyTaxes + insurance + maintenance + capEx + utilities + other;

  // Income
  const monthlyOperatingIncome =
    effectiveMonthlyRent - totalAnualOperatingExpenses / 12;
  const annualOperatingIncome = 12 * monthlyOperatingIncome;

  // Debt Service
  const interestRate = 0.07;
  const loanTerm = 30;
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTerm * 12)) /
    (Math.pow(1 + monthlyInterestRate, loanTerm * 12) - 1);
  const annualDebtService = 12 * monthlyPayment;

  // Cash Flow
  const annualCashFlow = annualOperatingIncome - annualDebtService;

  // Return on Investment
  const cashOnCashReturn = annualCashFlow / totalAcquisitionCosts;
  const capRate = annualOperatingIncome / purchasePrice;

  // Display Results
  console.log(`Purchase Price: $${purchasePrice}`);
  console.log(`Down Payment: $${downPayment}`);
  console.log(`Closing Costs: $${closingCosts}`);
  console.log(`Renovation Costs: $${renovationCosts}`);
  console.log(`Total Acquisition Costs: $${totalAcquisitionCosts}`);
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Monthly Rent: $${monthlyRent}`);
  console.log(`Vacancy Rate: ${vacancyRate * 100}%`);
  console.log(`Monthly Vacancy Cost: $${monthlyVacancyCost}`);
  console.log(`Management Rate: ${managementRate * 100}%`);
  console.log(`Monthly Management Cost: $${monthlyManagementCost}`);
  console.log(`Effective Monthly Rent: $${effectiveMonthlyRent}`);
  console.log(`HOA: $${hoa}`);
  console.log(`Property Taxes: $${propertyTaxes}`);
  console.log(`Insurance: $${insurance}`);
  console.log(`Maintenance: $${maintenance}`);
  console.log(`CapEx: $${capEx}`);
  console.log(`Utilities: $${utilities}`);
  console.log(`Other: $${other}`);
  console.log(`Total Operating Expenses: $${totalAnualOperatingExpenses}`);
  console.log(`Monthly Operating Income: $${monthlyOperatingIncome}`);
  console.log(`Annual Operating Income: $${annualOperatingIncome}`);
  console.log(`Interest Rate: ${interestRate * 100}%`);
  console.log(`Loan Term: ${loanTerm} years`);
  console.log(`Monthly Interest Rate: ${monthlyInterestRate * 100}%`);
  console.log(`Monthly Payment: $${monthlyPayment}`);
  console.log(`Annual Debt Service: $${annualDebtService}`);
  console.log(`Annual Cash Flow: $${annualCashFlow}`);
  console.log(`Cash on Cash Return: ${cashOnCashReturn * 100}%`);
  console.log(`Cap Rate: ${capRate * 100}%`);
};
