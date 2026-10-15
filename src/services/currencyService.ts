import type { Money } from '../types'

export interface ExchangeRates {
  USD: number
  KHR: number
}

export const getExchangeRate = async (
  from: Money['currency'],
  to: Money['currency'],
): Promise<number> => {
  if (from === to) return 1
  return from === 'USD' && to === 'KHR' ? 4100 : 1 / 4100
}
