export const currencyConverter = num =>
  num.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
