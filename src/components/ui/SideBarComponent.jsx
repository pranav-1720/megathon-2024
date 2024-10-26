// components/SideBarComponent.jsx
"use client";

import React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

const SideBarComponent = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleNavigation = (path) => {
    router.push(path);
    if (isMobile) setDrawerOpen(false); // Close drawer on mobile after navigation
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        padding: 2,
      }}
      role="presentation"
      onClick={() => setDrawerOpen(false)} // Close drawer on click
      onKeyDown={() => setDrawerOpen(false)}
    >
      {!isMobile && (
        <Typography
          variant="h6"
          component="div"
          sx={{
            margin: 2,
            fontWeight: "bold",
            color: "#3859ee",
          }}
        >
          Pandavas
        </Typography>
      )}
      <List>
        <ListItem button={"true"} onClick={() => handleNavigation("/")}>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              fontSize: "1.2rem", // Make text bigger
              fontWeight: 400, // Bold text for better readability
            }}
          />
        </ListItem>
        <ListItem button={"true"} onClick={() => handleNavigation("/about")}>
          <ListItemText
            primary="About"
            primaryTypographyProps={{
              fontSize: "1.2rem",
              fontWeight: 400,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <AppBar position="static" sx={{ backgroundColor: "#3859ee" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pandavas
            </Typography>
            <Button color="inherit" onClick={() => setDrawerOpen(true)}>
              Menu
            </Button>
          </Toolbar>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {drawer}
          </Drawer>
        </AppBar>
      ) : (
        <Drawer
          anchor="left"
          variant="persistent"
          open={true}
          sx={{
            "& .MuiDrawer-paper": {
              width: 200,
              boxSizing: "border-box",
              bgcolor: "#f5f5f5",
              //   bgcolor: "#3859ee", // Sidebar background color
              //   color: "#fff", // Text color for better contrast
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default SideBarComponent;
