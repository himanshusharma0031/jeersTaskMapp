import "./Login.css";
import {SignIn} from "@clerk/clerk-react"

function Login() {
 return(
  <SignIn  signUpUrl="/register" fallbackRedirectUrl="/dashboard"  />
 )
}

export default Login;