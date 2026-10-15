export interface ItineraryStop { title: string; description: string; durationMinutes: number }
export interface Tour { id: string; name: string; description: string; stops: ItineraryStop[] }
export interface TicketPass { id: string; tourId: string; validOn: string }
