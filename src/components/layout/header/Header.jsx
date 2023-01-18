import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

function Header(props) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{mr: 2}}/>
        <Typography variant="h6" color="inherit" noWrap>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
