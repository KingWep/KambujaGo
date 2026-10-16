import { createContext } from 'react'

export const CurrencyContext = createContext({
  currency: 'USD',
  setCurrency: () => undefined,
})
