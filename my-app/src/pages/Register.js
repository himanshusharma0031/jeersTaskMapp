import "./Register.css";
import {SignUp} from "@clerk/clerk-react"

function Register() {
return(
  <SignUp signInUrl="/" fallbackRedirectUrl="/dashboard" />
)
}

export default Register;