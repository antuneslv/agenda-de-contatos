import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes() {
  const authenticated = sessionStorage.getItem('authenticated')
  
  return authenticated ? <Outlet /> : <Navigate to="/" /> 
}

export default ProtectedRoutes
