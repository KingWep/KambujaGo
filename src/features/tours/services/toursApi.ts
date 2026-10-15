export const toursApi = {
  list: '/tours',
  details: (id: string) => `/tours/${id}`,
} as const
