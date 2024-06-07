import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import CSS file for styling
import axios from 'axios';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle login form
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to toggle login form
  const [DontShowBoth,setDontShowBoth]=useState(false);

  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  // login click
  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

  // Register click
  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };



  // login
  const handleSubmitl = async (e) => {
    e.preventDefault();
    try {
      if(typeof window!=="undefined"){

        const response=await axios.post('http://localhost:5000/auth/login', { email, password });
        
        localStorage.setItem('token', response.data.token);
        console.log(response)
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      navigate('/Nauth');
    }
  }

  //signup
  const handleSubmitr = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/signup', { name,email, password });
      alert("signup success!")
      setName("");
      setEmail("");
      setPassword("");
      window.location.reload();
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  }

  return (
    <div style={{ textAlign: 'center', position: 'absolute', left: '31%', bottom: '40%' }}>
      <h1>Welcome to App</h1>
      <p>Please login or register to continue.</p>
      <button className="landing-button" onClick={handleLoginClick}>Login</button>
      <button className="landing-button" onClick={handleRegisterClick}>Register</button>
      {/*render login form */}
      {showLoginForm && (
        <form onSubmit={handleSubmitl}>
          <input type="email" placeholder="Email" value={email}  onChange={(e)=> setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button type="submit">Submit</button>
        </form>
      )}

      {/*render Register form */}
      {showRegisterForm && (
        <form onSubmit={handleSubmitr}>
          <input type="name" placeholder="name" value={name}  onChange={(e)=> setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email}  onChange={(e)=> setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
