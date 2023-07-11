import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

//import AdbIcon from "@mui/icons-material/Adb";

const Nav = () => {
  return (
    <AppBar position="static">
      <ButtonGroup
        size="large"
        variant="outlined"
        aria-label="outlined button group"
        color="secondary"
        align="center"
      >
        <Link to="./">
          <Button>Home</Button>
        </Link>
        <Link to="./generate">
          <Button>Recipe Generator</Button>
        </Link>
        <Link to="./recipes">
          <Button>Recipes</Button>
        </Link>
      </ButtonGroup>
    </AppBar>
  );
};

export default Nav;
