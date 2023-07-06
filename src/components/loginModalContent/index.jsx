import React, { useState } from "react";
import "./index.css";
import image from "./image.png";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import PrimaryGradientButton from "../primaryGrandientButton";
import SecondaryGradientButton from "../secondaryGrandientButton";
import { AddBoxOutlined } from "@mui/icons-material";
import CustomOutlinedInput from "../customOutlinedInput";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import FlashMessage from "../flashMessage";

export default function LoginModalContent({ setCreateAccountContent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [flashMessage, setFlashMessage] = useState('');

  const showFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => {
      setFlashMessage("");
    }, 3000); // Hide the flash message after 3 seconds
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!email || !password) {
      showFlashMessage("Please enter your email and password.");
      return;
    }

    try {
      await login({ email, password }); // Pass an object containing email and password
      console.log("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="loginModalContent">
      <div className="flashMessageContainer">
        {flashMessage && (
        <FlashMessage message={flashMessage} onClose={() => setFlashMessage("")} />
        )}
      </div>
      <div className="firstSection">
        Login
        <div className="imageContainer">
          <img width="295px" height="127px" src={image} alt=""></img>
        </div>
      </div>
      <div className="secondSection">
        <form onSubmit={handleLogin} sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer">
            <label className="inputLabel">Email</label>
            <CustomOutlinedInput
              setValue={setEmail}
              placeholder="Email"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <Email sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "30px" }}>
            <label className="inputLabel">Senha</label>
            <PasswordOutlinedInput setValue={setPassword} />
          </div>
          <div className="buttonsSection">
            <PrimaryGradientButton text="Entrar" type="submit" />
            <SecondaryGradientButton
              text="Quero criar uma conta"
              onClick={setCreateAccountContent}
              icon={<AddBoxOutlined />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
