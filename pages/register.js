import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from "axios";

  const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Add your registration logic here

    axios({
      url: "http://localhost:8001/user/createUser",
      method: "POST",
      headers: {},
      // Attaching the form data
      data: {
        email: email,
        username: username,
        password: password,
        birthdate: birthdate,
      },
    })
      .then((res) => {
        //console.log(data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Registration submitted:", {
      email,
      username,
      password,
      birthdate,
    });
    // Reset the form
    setEmail('');
    setUsername('');

    setPassword('');
    setBirthday('');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div class="card">
       <Header/>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
    Username:
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
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
        <label>
          Birthday:
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {/* <button className="toggle-btn" onClick={handleDarkModeToggle}>
        {darkMode ? (
          <img src="/light-logo.svg" alt="Light Mode" />
        ) : (
          <img src="/dark-logo.svg" alt="Dark Mode" />
        )}
      </button> */}
    </div>
  );
};

export default Register;
