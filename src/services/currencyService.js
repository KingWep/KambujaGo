export const getExchangeRate = async (from, to) => {
  if (from === to) return 1
  return from === 'USD' && to === 'KHR' ? 4100 : 1 / 4100
}
