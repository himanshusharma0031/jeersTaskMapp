import "./Register.css";
import {SignUp} from "@clerk/clerk-react"

function Register() {
return(
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f4f7fc' }}>
    <SignUp signInUrl="/" fallbackRedirectUrl="/dashboard" />
  </div>
)
}

export default Register;