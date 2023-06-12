import React, {useEffect} from "react";
import "./index.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function PrimaryGradientButton({ text, icon, onClick }) {
  const { isLoggedIn, username } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  const buttonText = isLoggedIn ? username : text;
  
  return (
    <button onClick={onClick} className="primaryGrandientButton">
      {icon}
      {buttonText}
    </button>
  );
}

export default PrimaryGradientButton;
