import React from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function WatchButton({ onClick }) {
  return <PrimaryGradientButton onClick={onClick}  text="Assistir" icon={<PlayArrowOutlinedIcon />} />;
}