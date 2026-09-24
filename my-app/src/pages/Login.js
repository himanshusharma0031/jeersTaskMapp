import "./Login.css";
import {SignIn} from "@clerk/clerk-react"

function Login() {
 return(
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f4f7fc' }}>
    <SignIn signUpUrl="/register" fallbackRedirectUrl="/dashboard" />
  </div>
 )
}

export default Login;