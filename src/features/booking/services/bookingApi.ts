export const bookingApi = {
  create: '/bookings',
  details: (id: string) => `/bookings/${id}`,
} as const
