"use client";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SideBarComponent from "@/components/ui/SideBarComponent"; // Adjust the import path as necessary

export default function Admin() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "100vh" }}>
      <SideBarComponent /> {/* Sidebar as a left drawer on desktop, top menu on mobile */}
      
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          width: "100%", // Ensures full width on mobile
          backgroundColor: "background.default",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Admin Page!
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
