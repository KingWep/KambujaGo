export type BookingStatus = 'pending' | 'confirmed' | 'cancelled'
export interface UserBooking { id: string; title: string; date: string; status: BookingStatus }
