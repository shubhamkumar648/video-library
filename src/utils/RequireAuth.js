import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'


export const RequireAuth = ({children}) => {

  const {user} = useAuth()
  const {location} = useLocation()
  
return user ? (children): <Navigate to = "/login" state={{from:location}} replace/>


  }
