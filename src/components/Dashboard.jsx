import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching authenticated user:', error);
      }
    };

    fetchAuthenticatedUser();
  }, []);

  const handleGetAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
      setShowAllUsers(!showAllUsers);
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true }); 
  };

  return (
    <div style={{ textAlign: 'center', position: "absolute" ,left:"40%", bottom:"40%" }}>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <h3>Authenticated User</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      )}
      <button onClick={handleGetAllUsers} style={{margin:"10px"}}>Get All Users</button>
      {showAllUsers && (
        <div>
          <h3>All Users</h3>
          <ul>
          {users.map(user => (
                  <li key={user._id}>{user.name}</li>
                ))}
          </ul>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
