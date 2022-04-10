import { Outlet, Navigate } from 'react-router-dom'

const logedIn = true

function ProtectedRoutes() {
  return logedIn ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
