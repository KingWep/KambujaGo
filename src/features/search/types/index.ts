export interface SearchParams {
  destination?: string
  startDate?: string
  endDate?: string
  guests?: number
}

export interface FilterState {
  minPrice?: number
  maxPrice?: number
  rating?: number
}
