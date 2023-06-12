import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const apiURL = 'http://localhost:3333';

export default function AuthProvider ({ children }) { 
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setisLoggedIn(true);
      setName(userData.name);
    }
  }, []);

  const login = async ({email, password}) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate`, {
        email,
        password
      });
      if (loginResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(loginResponse.data));
        const userData = loginResponse.data; 
        setisLoggedIn(true);
        setName(userData.name);
        const role = userData.role;
        setRole(role);
        alert('Login successful!');
        return;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };  

  const register = async (name, email, password, phone, birthDate, confirmPassword) => {
    try {
      const registerResponse = await axios.post(`${apiURL}/users`, {
        name,
        email,
        password,
        phone,
        birthDate,
        confirmPassword,
        role: "customer",
      });
  
      if (registerResponse.status === 201) {
        localStorage.setItem("user", JSON.stringify(registerResponse.data));
        const userData = registerResponse.data;
        alert('Registration successful!');
        setisLoggedIn(true);
        return;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error === "@users/create") {
        alert('Email address already exists. Please use a different email.');
        return;  //ends the function and prevent the confirmation message to come out after an error
      } else {
        console.error('Registration error:', error);
        return;
      }
    }
  };
  
  const storedUser = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    setisLoggedIn(false);
    axios.defaults.headers.common['Authorization'] = null; // Clear the token from axios defaults
    alert('Logged out successfully!');
  };


  const AuthContextValue = {
    login,
    register:register,
    storedUser: JSON.parse(storedUser),
    logout,
    isLoggedIn,
  };

  return(
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
