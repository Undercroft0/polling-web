import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useRouter } from "next/router";
  const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      // Endpoint to send files
      url: "http://localhost:8001/auth/login",
      method: "POST",
      headers: {},

      // Attaching the form data
      data: {
        email: email,
        password: password,
      },
    })
      // Handle the response from backend here
      .then((res) => {
        console.log("connected to pollweb 2023");
        router.push("/");
        console.log(res);
      })
      .catch((err) => {
        router.push("/");
        console.log(err);
      });

    console.log("Login submitted:", { email, password });
    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div class="card">
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button onClick={handleLogin} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;