import { useEffect, useState } from 'react'

const useStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem(key)
    return data ? data : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export default useStorage
