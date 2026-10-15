import type { Coordinates, Money } from '../../../types'

export interface Amenity { id: string; name: string }
export interface HotelReview { id: string; rating: number; comment: string }
export interface Room { id: string; name: string; price: Money; capacity: number }
export interface Hotel {
  id: string
  name: string
  location: Coordinates
  rooms: Room[]
  amenities: Amenity[]
  reviews: HotelReview[]
}
