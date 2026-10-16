export const formatDateRange = (start, end) =>
  `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`

export const durationInDays = (start, end) =>
  Math.max(0, Math.ceil((end.getTime() - start.getTime()) / 86_400_000))
