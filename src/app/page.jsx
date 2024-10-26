"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, TextField, Button, Typography, Paper } from "@mui/material";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin") router.push("/user/admin");
    else router.push(`/user/${username}`);
  };

  // Function to handle input change and restrict characters
  const handleChange = (e) => {
    const input = e.target.value;
    // Use regex to allow only lowercase letters and underscores
    if (/^[a-z_]*$/.test(input) || input === "") {
      setUsername(input);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{
              color: "#2575fc",
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Welcome Back!
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleChange} // Use the new handleChange function
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#6a11cb" },
                "&:hover fieldset": { borderColor: "#2575fc" },
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 2,
              bgcolor: "#6a11cb",
              "&:hover": { bgcolor: "#2575fc" },
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
