
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  
  const storedEmail = 'user@example.com'; 
  const storedPassword = 'password123'; 

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email === storedEmail && password === storedPassword) {
      console.log('Login successful!');
      
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-primary">
      <div className="row justify-content-center">
        <div className="col-md-30">
          <div className="card p-4 text-white" style={{ borderRadius: '20px', backdropFilter: 'blur(15px)', background: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="card-header text-center">
              <h2>Welcome Back</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-3 text-end">
                  <a href="#" className="forgot-password text-light" style={{ textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              {errorMessage && (
                <div className="mt-3 text-danger text-center">
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


