"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SideBarComponent from "@/components/ui/SideBarComponent"; // Adjust the import path as necessary
// import { Input } from "components/input";

export default function User({ params }) {
  const { id } = params;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view
  const [inputValue, setInputValue] = useState("");

  // Placeholder function for the send button
  const handleSubmit = () => {
    console.log("Send button clicked with input:", inputValue);
  };

  // Mock JSON data to display as a list
  const mockData = [
    { id: 1, text: "Admin item 1" },
    { id: 2, text: "Admin item 2" },
    { id: 3, text: "Admin item 3" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
      }}
    >
      <SideBarComponent />{" "}
      {/* Sidebar as a left drawer on desktop, top menu on mobile */}
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
            {id} Page!
          </Typography>

          {/* Input box with send button */}
          <Box display="flex" width="100%" my={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your input here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ flexGrow: 1, marginRight: 1 }}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Send
            </Button>
          </Box>

          {/* List from mock JSON data */}
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {mockData.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </Box>
  );
}
