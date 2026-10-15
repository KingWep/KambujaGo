export interface Money {
  amount: number
  currency: 'USD' | 'KHR'
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Pagination {
  page: number
  pageSize: number
  total: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  pagination?: Pagination
}
