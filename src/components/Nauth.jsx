import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nauth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const goToHome = () => {
    navigate('/');
  };
  useEffect(()=>{
    if(token)navigate('/dashboard')
  },[token])

  return (
    <div style={{ textAlign: 'center',position:"absolute", left:"20%", bottom:"20%"}}>
        <img src="https://www.ionos.com/digitalguide/fileadmin/_processed_/8/2/csm_401-Unauthorized-t_5cc371054b.webp" alt="" />
      <p style={{color:"red"}}>You do not have permission to view this page.</p>
      <button onClick={goToHome} style={{ padding: '10px', cursor: 'pointer', border: '1px solid black', borderRadius: '5px' }}>
        Go to Home
      </button>
    </div>
  );
};

export default Nauth;
