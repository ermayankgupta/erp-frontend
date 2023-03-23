import AuthProvider from "./AuthContext/AuthContext"

const GlobalState = ({children})=>{
  return(
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  )
}

export default GlobalState