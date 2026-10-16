export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  defaultCurrency: import.meta.env.VITE_DEFAULT_CURRENCY ?? 'USD',
  defaultPageSize: 20,
}
