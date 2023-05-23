import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const apiURL = 'http://localhost:3333';

export default function AuthProvider ({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  

  const login = async (username, password) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate`, {
        username,
        password
      });
  
      if (loginResponse.status === 200) {
        const token = loginResponse.data.jwt;
        setAuthToken(token);
        setIsAuthenticated(true);
        alert('Login successful!');
  
      } else if (loginResponse.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
  
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        alert(`Login failed: ${errorMessage}`);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  const register= async(name, email, password, phone, birthDate, confirmPassword) => {
    try{
      const registerResponse = await axios.post(`${apiURL}/users`, {
        data: {
          name,
          email, 
          password,
          phone,
          birthDate,
          confirmPassword,
          role:"user",
        }
      });
  
      if (registerResponse.status === 201) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };
  
  const logout = () => {
    setAuthToken(null);
  };

  const AuthContextValue = {
    authToken,
    login,
    register:register,
  };

  return(
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
