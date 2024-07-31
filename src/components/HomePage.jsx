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
import LanguageIcon from "@mui/icons-material/Language";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

import ourMissionImage from "../assets/ourMission.jpg";
import inclusive from "../assets/inclusive.png";
import logoImage from "../assets/Logo.png";

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
  "স্বাগতম",
  "Maligayang Pagdating",
  "ਸੁਆਗਤ ਹੈ",
  "Soo Ddawoow",
  "Akeyi",
  "Selamat Datang",
  "Mirëseardhje",
  "B’a’ntulena",
  "خوش آمدید",
  "Ласкаво просимо",
];

const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showAppBar, setShowAppBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleSignInClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMessageIndex(
          (prevIndex) => (prevIndex + 1) % welcomeMessages.length
        );
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowAppBar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#121212" : "#F2E8CF",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? "#333" : "#386641",
          opacity: showAppBar ? 1 : 0,
          visibility: showAppBar ? "visible" : "hidden",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
          borderRadius: "50px",
          maxWidth: "calc(100% - 20px)",
          left: "50%",
          transform: "translateX(-50%)",
          right: 0,
          top: "10px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                className="mr-2"
                src={logoImage}
                alt="Logo"
                style={{ width: 30, height: 30 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: darkMode ? "#fff" : "#F2E8CF",
                  textDecoration: "none",
                }}
              >
                OpenDoor
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
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
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={
                    page === "Sign In" ? handleSignInClick : handleCloseNavMenu
                  }
                  sx={{
                    my: 2,
                    color: darkMode ? "#fff" : "#F2E8CF",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                color="default"
              />
              <Typography sx={{ ml: 1, color: darkMode ? "#fff" : "#F2E8CF" }}>
                {darkMode ? "Dark" : "Light"}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          pt: 8,
          pb: 6,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color={darkMode ? "#F2E8CF" : "#386641"}
          gutterBottom
          sx={{
            fontFamily: "fantasy",
            fontSize: { xs: "5rem", sm: "6rem", md: "7rem", lg: "9rem" },
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {welcomeMessages[messageIndex]}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color={darkMode ? "#A7C957" : "#6A994E"}
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2rem" },
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          Empowering FGLI students with English language skills
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#BC4749",
            "&:hover": { backgroundColor: "#A53F41" },
            fontSize: "1.5rem",
            padding: "1rem 2rem",
            minWidth: "200px",
          }}
        >
          Start Learning Today
        </Button>
      </Box>

      <Box sx={{ py: 8, backgroundColor: darkMode ? "#1E1E1E" : "#6A994E" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ color: "#F2E8CF", fontFamily: "fantasy" }}
              >
                Our Mission
              </Typography>
              <Typography variant="h5" paragraph sx={{ color: "#F2E8CF" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography variant="h5" paragraph sx={{ color: "#F2E8CF" }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 20 }}>
                <CardMedia
                  sx={{height: 350}}
                  component="img"
                  height="800"
                  width="800"
                  image={ourMissionImage}
                  alt="Our Mission"
                />
              </Card>
              <div style={{marginBottom: "20px"}}></div>
              <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 20 }}>
                <CardMedia
                  sx={{height: 350}}
                  component="img"
                  width="800"
                  image={inclusive}
                  alt="Our Mission"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>



      {/* Contact */}


      <Box sx={{ py: 8, backgroundColor: darkMode ? "#121212" : "#F2E8CF" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={11.5} md={11.5} >
            <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{color: darkMode ? "#F2E8CF" : "#6A994E" , fontFamily: "fantasy" }}
                align = "center"
              >
                About Us
              </Typography>
            </Grid>


            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Mano"
                  height="40"
                  image={inclusive}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                    Mano Wertman
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Frontend
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

            <Card>
                <CardMedia
                  component="img"
                  alt="Pranav"
                  height="140"
                  image={inclusive}
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                    Pranav Pramod
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Fullstack
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

            <Card>
                <CardMedia
                  component="img"
                  alt="Neil"
                  height="140"
                  image={inclusive}
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                    Neil Kumaran
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    AI Integration/Backend
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

            <Card>
                <CardMedia
                  component="img"
                  alt="Stratton"
                  height="140"
                  image={inclusive}
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                    Stratton Jelley
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Backend
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

          </Grid>
        </Container>
      </Box>

      
    </Box>
  );
};

export default HomePage;
