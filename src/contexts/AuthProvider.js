import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import FlashMessage from "../components/flashMessage/index";

const apiURL = 'http://localhost:3333';

export default function AuthProvider ({ children }) { 
  const [flashMessage, setFlashMessage] = useState('');

  const showFlashMessage = (message) => {
    setFlashMessage(message);
  };

  const login = async ({email, password}) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate`, {
        email,
        password
      });
      if (loginResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(loginResponse.data));
        const token = JSON.parse(localStorage.getItem('user')).token;
        const userData = loginResponse.data; 
        const role = userData.role;
        showFlashMessage(`Bem vindo(a) de volta, ${userData.name}!`);
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
        showFlashMessage('Registration successful!');
        return;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error === "@users/create") {
        showFlashMessage('Email address already exists. Please use a different email.');
        return;
      } else {
        console.error('Registration error:', error);
        return;
      }
    }
  };
  
  const storedUser = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    axios.defaults.headers.common['Authorization'] = null;
    showFlashMessage('Logged out successfully!');
  };


  const AuthContextValue = {
    login,
    register:register,
    storedUser: JSON.parse(storedUser),
    logout,
    isLoggedIn: JSON.parse(storedUser) != null,
  };

  return (
  <>
    {flashMessage && <FlashMessage message={flashMessage} onClose={() => setFlashMessage('')} />}
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  </>
);
}
