
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

    [`&.${linearProgressClasses.colorPrimary}`]: {
        height: "5px",
        width: "200px",
        background: "rgba(238, 238, 238, 0.05);",
        boxShadow: "1px solid rgba(238, 238, 238, 0.05)",
        borderRadius: "6px",
      },
      [`& .${linearProgressClasses.bar}`]: {
        background: "linear-gradient(90deg, #666666 0%, #919191 50.74%, #D9D9D9 100%)",
        boxShadow: "0px 2px 10px rgba(145, 156, 174, 0.25)",
        borderRadius: "6px",
    }
}));


export default function CustomizedProgressBars({value}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress 
        variant="determinate" value={value} />
    </Box>
  );
}