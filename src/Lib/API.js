const API_HOST = '127.0.0.1:5000'
const API_PROTOCOL = 'http'
const ANALYZE_ENDPOINT = '/analyze?sentence=:sentence'
const API_URL =  `${API_PROTOCOL}://${API_HOST}`

const DEFAULT_HEADERS = {
  'Content-Type': 'text/html'
}


class API {
  static analyzeSentence(sentence) {
    const endpoint = ANALYZE_ENDPOINT.replace(':sentence', sentence)

    return this.get(endpoint)
  }

  static request(path, options = {}) {
    const url = `${API_URL}${path}`

    return fetch(url, { ...options, headers: DEFAULT_HEADERS })
  }

  static get(path, options = {}) {
    return this.request(path, { ...options, method: 'GET' })
  }

  static post(path, data, options = {}) {
    return this.request(path, { ...options, method: 'POST' })
  }
}

export default API
