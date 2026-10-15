import type { Money } from '../../../types'

export interface BookingRequest { itemId: string; passengerName: string; total: Money }
export interface Reservation { id: string; status: 'pending' | 'confirmed' | 'cancelled'; total: Money }
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'
