import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../axios";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {

      await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Registration Successful");

      navigate("/");

    } catch (err) {

      alert(err.response.data.message);

    }
  };

  return (
    <div className="register-container">

      <h2>Register</h2>

      <form onSubmit={registerUser}>

        <input
          type="text"
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button>Register</button>

      </form>

      <br/>

      <Link to="/">Already have an account?</Link>

    </div>
  );
}

export default Register;