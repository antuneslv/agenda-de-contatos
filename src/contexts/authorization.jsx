import { createContext, useState, useEffect } from 'react'

export const AuthorizationContext = createContext()

function AuthorizationProvider({children}) {
  // const [authorization, setAuthorization] = useState(false)
  // let token = localStorage.getItem('token')

  // useEffect(() => {
  //   token ? setAuthorization(true) : setAuthorization(false)
  // }, [])

  return (
    <AuthorizationContext.Provider value={{ }}>
      {children}
    </AuthorizationContext.Provider>
  )
}

export default AuthorizationProvider
