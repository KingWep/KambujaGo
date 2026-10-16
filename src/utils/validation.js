export const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isValidPhone = (value) =>
  /^\+?[0-9\s-]{8,20}$/.test(value)

export const isValidPassport = (value) =>
  /^[A-Z0-9]{6,12}$/i.test(value)
