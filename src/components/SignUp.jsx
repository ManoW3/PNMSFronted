import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const theme = createTheme();

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign Up and Sign In
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          error = "Invalid email address";
        }
        break;
      case "username":
        if (!value.trim()) {
          error = "Username is required";
        }
        break;
      case "password":
        if (
          value.length < 8 ||
          !/[A-Z]/.test(value) ||
          !/[a-z]/.test(value) ||
          !/\d/.test(value) ||
          !/[!@#?\-_]/.test(value)
        ) {
          error =
            "Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters (!, @, #, ?, -, _).";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate all fields before submission
    validateField("email", formData.email);
    validateField("username", formData.username);
    validateField("password", formData.password);
    validateField("confirmPassword", formData.confirmPassword);
    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("POST", "/makeaccount", false);
      xmlHttp.setRequestHeader("Content-Type", "application/json");
      let payload = {
        username: formData.username,
        password: formData.password,
        email: formData.email,
      };
      xmlHttp.send(JSON.stringify(payload));
      if (xmlHttp.responseText !== "ok") {
        // Handle error response
        console.error("Error creating account:", xmlHttp.responseText);
        setSnackbarMessage(
          "This account is already taken. Please try again."
        );
        setSnackbarOpen(true);
      }
    }
    else {
      // Redirect to ProfileSetup.jsx
      navigate("/profile-setup");
    }
  };

  const handleShowPasswordChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const toggleFormType = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #F2E8CF 0%, #A6B1E1 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="bg-[#eddcf5]"
            sx={{
              marginTop: 8,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              boxShadow: 5,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {isSignUp && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="off"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password}
                helperText={errors.password}
              />
              {isSignUp && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={handleShowPasswordChange}
                    color="primary"
                  />
                }
                label="Show Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <Grid container>
                <Grid item>
                  <Typography variant="body2" display="inline">
                    {isSignUp
                      ? "Already have an account? "
                      : "Don't have an account? "}
                  </Typography>
                  <Link href="#" variant="body2" onClick={toggleFormType}>
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default SignUp;
