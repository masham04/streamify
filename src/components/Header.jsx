import React from "react";
import logo from '../assets/images/logo.png'
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent:'start',
      alignItems: "center",
    }}>
      <img src={logo} alt='logo' />
      &nbsp;
      <h4 style={{paddingTop: '2px'}}>Streamify</h4>
    </Box>
  );
}
