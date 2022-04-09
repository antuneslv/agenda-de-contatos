import { useCallback, useState, useMemo } from 'react'
import useStorage from './useStorage'

const useFetch = url => {
  const urlBase = useMemo(() => url || 'http://localhost:5000/v1/', [url])
  const [token, setToken] = useStorage('token', '')

  const request = useCallback(
    async (route, options = {}) => {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('Authorization', `Bearer ${token}`)

      options.headers = headers

      let response
      let json

      try {
        response = await fetch(urlBase + route, options)
        json = await response.json()

        if (route === 'auth' && options?.method === 'POST') {
          setToken(json.data.token)
        }
      } catch (err) {
        // json = null
      } finally {
        return { response, json }
      }
    },
    [token, setToken, urlBase]
  )

  return { request }
}

export default useFetch
