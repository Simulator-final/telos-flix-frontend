import React from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import { PersonOutline } from "@mui/icons-material";

export default function LoginButton({onClick}) {
  return <PrimaryGradientButton  onClick={onClick} text="Fazer Login" icon={<PersonOutline />} />;
} 