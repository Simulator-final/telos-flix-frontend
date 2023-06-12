import React, { useContext } from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import { PersonOutline } from "@mui/icons-material";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginButton({ onClick }) {
  const { storedUser } = useContext(AuthContext);

  return (
    <PrimaryGradientButton onClick={onClick} text={storedUser?.name || "Fazer Login"} icon={<PersonOutline />} />
  );
}
