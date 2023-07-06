import React from "react";
import SecondaryGradientButton from "../secondaryGrandientButton";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function RateButton({onClick}) {
  return (
    <SecondaryGradientButton onClick={onClick} text="Avaliar" icon={<StarBorderOutlinedIcon />} />
  );
}