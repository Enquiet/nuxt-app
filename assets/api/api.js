import { API_URL } from './url.js'

export default {
  async fetchApi (url, method = 'GET', data) {
    const response = await fetch(`${API_URL}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    if (!response.ok) {
      const error = new Error(response.statusText)
      const { code, message, request } = result.error
      error.code = code
      error.message = message
      error.request = request
      throw error
    }
    return result
  }
}
