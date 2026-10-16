export const convertMoney = (money, currency, rate) => ({
  amount: currency === money.currency ? money.amount : money.amount * rate,
  currency,
})

export const formatMoney = ({ amount, currency }) =>
  new Intl.NumberFormat(currency === 'KHR' ? 'km-KH' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'KHR' ? 0 : 2,
  }).format(amount)
