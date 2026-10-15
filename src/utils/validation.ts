export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isValidPhone = (value: string): boolean =>
  /^\+?[0-9\s-]{8,20}$/.test(value)

export const isValidPassport = (value: string): boolean =>
  /^[A-Z0-9]{6,12}$/i.test(value)
