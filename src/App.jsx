import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';
import Nauth from './components/Nauth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>

            <Route path="/" element={<LandingPage/>} />
            <Route path="/Nauth" element={<Nauth/>} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
