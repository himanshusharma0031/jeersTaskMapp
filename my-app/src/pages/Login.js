import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../axios";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUser = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={loginUser}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button>Login</button>

      </form>

      <br />

      <Link to="/register">Create Account</Link>

    </div>
  );
}

export default Login;