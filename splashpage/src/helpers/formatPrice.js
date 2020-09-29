const currencyFormatOptions = {
  style: 'currency',
  currency: 'USD',
};

const roundedCurrencyFormatOptions = {
  ...currencyFormatOptions,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

const currencyFormatter = new Intl.NumberFormat('en-US', currencyFormatOptions);
const roundedCurrencyFormatter = new Intl.NumberFormat('en-US', roundedCurrencyFormatOptions);

export function formatPrice(price, rounded = false) {
  if (rounded) {
    return roundedCurrencyFormatter(price);
  }

  return currencyFormatter.format(price);
}
