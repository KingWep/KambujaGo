import { createContext } from 'react'

export interface BookingContextValue {
  bookingId: string | null
}

export const BookingContext = createContext<BookingContextValue>({ bookingId: null })
