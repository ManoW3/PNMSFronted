import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Our Mission", "Sign In", "Contact"];
const welcomeMessages = [
  "Welcome",
  "Bienvenido",
  "Bienvenu",
  "Willkommen",
  "Benvenuto",
  "Bem-vindo",
  "добро пожаловать",
  "欢迎",
  "ようこそ",
  "환영합니다",
  "مرحبا",
  "नमस्ते",
  "Hoş geldiniz",
  "Witaj",
  "Welkom",
  "Välkommen",
  "ברוכים הבאים",
  "Chào mừng",
  "வரவேற்பு",
  "স্বাগত",
  "maligayang pagdating",
  "ਸੁਆਗਤ ਹੈ",
  "soo dhawoow",
  "akeyi",
  "selamat datang",
  "mirëseardhje",
  "B’a’ntulena",
  "خوش آمدید",
  "Ласкаво просимо"
];

const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#6A994E" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                left: 0,
              }}
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LORUM
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    mx: 2,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ textAlign: "center", mt: 4, color: "#386641" }}>
        <Typography variant="h1" sx={{ fontFamily: "fantasy" }}>
          {welcomeMessages[messageIndex]}
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;