export const paymentMethods = ['bakong-khqr', 'aba-pay', 'card', 'pay-on-arrival'] as const
export type PaymentMethod = (typeof paymentMethods)[number]
