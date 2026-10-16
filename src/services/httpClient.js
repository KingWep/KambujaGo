import { config } from '../constants/config'

export const httpClient = async (path, options = {}) => {
  const response = await fetch(`${config.apiBaseUrl}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}
