import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
  const [currentUser,setCurrentUser] = useState()
  
  return(
    <AuthContext.Provider value={{currentUser,setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
  return useContext(AuthContext)
}

export default AuthProvider