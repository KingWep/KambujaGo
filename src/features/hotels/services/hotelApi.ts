export const hotelApi = {
  list: '/hotels',
  details: (id: string) => `/hotels/${id}`,
} as const
