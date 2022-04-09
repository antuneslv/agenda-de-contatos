import { useEffect, useState } from 'react'

const useStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const data = sessionStorage.getItem(key)
    return data ? data : defaultValue
  })

  useEffect(() => {
    sessionStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export default useStorage
