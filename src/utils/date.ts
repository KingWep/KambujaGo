export const formatDateRange = (start: Date, end: Date): string =>
  `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`

export const durationInDays = (start: Date, end: Date): number =>
  Math.max(0, Math.ceil((end.getTime() - start.getTime()) / 86_400_000))
