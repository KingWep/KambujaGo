export interface Operator { id: string; name: string }
export interface Seat { id: string; label: string; available: boolean }
export interface Route {
  id: string
  origin: string
  destination: string
  departure: string
  arrival: string
  operator: Operator
}
export interface BoardingPass { bookingId: string; passengerName: string; seat: Seat }
