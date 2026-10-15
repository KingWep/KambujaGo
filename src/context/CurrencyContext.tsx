import { createContext } from 'react'

export interface CurrencyContextValue {
  currency: 'USD' | 'KHR'
  setCurrency: (currency: 'USD' | 'KHR') => void
}

export const CurrencyContext = createContext<CurrencyContextValue>({
  currency: 'USD',
  setCurrency: () => undefined,
})
