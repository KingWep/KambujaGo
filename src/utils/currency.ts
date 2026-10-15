import type { Money } from '../types'

export const convertMoney = (money: Money, currency: Money['currency'], rate: number): Money => ({
  amount: currency === money.currency ? money.amount : money.amount * rate,
  currency,
})

export const formatMoney = ({ amount, currency }: Money): string =>
  new Intl.NumberFormat(currency === 'KHR' ? 'km-KH' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'KHR' ? 0 : 2,
  }).format(amount)
