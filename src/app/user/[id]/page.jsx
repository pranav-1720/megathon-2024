"use client";

import { useState } from "react";
import {
  Box,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";

export default function User({ params }) {
  // const { id } = params;
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view
  // const [inputValue, setInputValue] = useState("");

  // // Placeholder function for the send button
  // const handleSubmit = () => {
  //   console.log("Send button clicked with input:", inputValue);
  // };

  // // Mock JSON data to display as a list
  // const mockData = [
  //   { id: 1, text: "Admin item 1" },
  //   { id: 2, text: "Admin item 2" },
  //   { id: 3, text: "Admin item 3" },
  // ];

  const sentimentClasses = {
    positive: "hover:bg-yellow-50",
    negative: "hover:bg-blue-50",
    neutral: "hover:bg-gray-100",
  };

  const sentiments = ["positive", "negative", "neutral"];

  const placeholder = {
    entries: [
      {
        date: "2023-10-01",
        text: "I can't seem to shake off this feeling of unease.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-02",
        text: "It feels like there's a cloud of worry hanging over me.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-03",
        text: "I keep replaying worst-case scenarios in my mind.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-04",
        text: "Sleep has become elusive because of this constant worry.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-05",
        text: "My mind feels like a pressure cooker, always on the edge.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-06",
        text: "It's hard to focus on anything when anxiety keeps creeping in.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-07",
        text: "I feel a knot in my stomach that refuses to go away.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-08",
        text: "Sometimes I feel like I'm drowning in a sea of anxious thoughts.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-09",
        text: "My heart races even at the smallest triggers.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-10",
        text: "The uncertainty of the future is overwhelming me.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-11",
        text: "I often find myself overthinking even the simplest decisions.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-12",
        text: "It feels like there's a tight grip around my chest, making it hard to breathe.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-13",
        text: "The fear of something going wrong is always lurking in the back of my mind.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-14",
        text: "It's frustrating how easily my mind jumps to the worst-case scenario.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-15",
        text: "Anxiety has turned even the smallest tasks into daunting challenges.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-16",
        text: "It's exhausting to constantly battle with my own mind.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-17",
        text: "I feel like I'm walking on eggshells, afraid of triggering my anxiety.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-18",
        text: "My mind is constantly racing, making it hard to find peace.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-19",
        text: "The feeling of impending doom hangs heavy on my shoulders.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
      {
        date: "2023-10-20",
        text: "It's hard to explain to others how anxiety can take over your life.",
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      },
    ],
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SideBarComponent />
      <div className="m-3 flex flex-col items-center justify-center leading-10">
        <div className="w-full max-w-lg gap-1.5">
          <Label htmlFor="message" className="mb-2 ml-2 text-lg font-bold">
            Today's Thoughts
          </Label>
          <div className="flex flex-row">
            <Input type="email" id="message" placeholder="I am feeling..." />
            <button className="ml-2 mt-1 h-0 w-0 border-b-[1em] border-l-[1em] border-t-[1em] border-b-transparent border-l-black border-t-transparent"></button>
          </div>
        </div>

        <div className="mt-6" id="History">
          <Label htmlFor="History" className="ml-2 text-lg font-bold">
            History
          </Label>
          {placeholder.entries
            .slice()
            .reverse()
            .map((entry) => (
              <Card
                className={clsx(
                  "mb-4 max-w-lg p-3 leading-5 hover:scale-[1.02]",
                  sentimentClasses[entry.sentiment],
                )}
              >
                <CardContent className="flex flex-col">
                  <div className="text-sm text-gray-500">{entry.date}</div>
                  <div className="flex">
                    <div className="mt-1.5 content-center">{entry.text}</div>
                    <Button className="ml-auto mt-1.5 block h-min w-min pl-2 pr-2 leading-[1.1]">
                      <span className="block">View</span>
                      <span className="block">More</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="mt-6 w-full">
          <div className="mx-auto h-32 w-3/5 rounded-xl border-8 border-brown-900 bg-brown-800"></div>
          <div className="mx-auto h-32 w-2/5 rounded-xl rounded-t-none border-8 border-t-0 border-brown-900 bg-brown-800"></div>
        </div>
      </div>
    </Box>
  );

  // return (
  //   <Box
  //     sx={{
  //       display: "flex",
  //       flexDirection: isMobile ? "column" : "row",
  //       minHeight: "100vh",
  //     }}
  //   >
  //     <SideBarComponent />{" "}
  //     {/* Sidebar as a left drawer on desktop, top menu on mobile */}
  //     <Box
  //       sx={{
  //         flexGrow: 1,
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         p: 4,
  //         width: "100%", // Ensures full width on mobile
  //         backgroundColor: "background.default",
  //       }}
  //     >
  //       <Container
  //         maxWidth="sm"
  //         sx={{
  //           bgcolor: "background.paper",
  //           p: 4,
  //           borderRadius: 2,
  //           boxShadow: 3,
  //           textAlign: "center",
  //         }}
  //       >
  //         <Typography variant="h2" gutterBottom>
  //           {id} Page!
  //         </Typography>

  //         {/* Input box with send button */}
  //         <Box display="flex" width="100%" my={2}>
  //           <TextField
  //             fullWidth
  //             variant="outlined"
  //             placeholder="Enter your input here"
  //             value={inputValue}
  //             onChange={(e) => setInputValue(e.target.value)}
  //             sx={{ flexGrow: 1, marginRight: 1 }}
  //           />
  //           <Button variant="contained" onClick={handleSubmit}>
  //             Send
  //           </Button>
  //         </Box>

  //         {/* List from mock JSON data */}
  //         <List sx={{ width: "100%", bgcolor: "background.paper" }}>
  //           {mockData.map((item) => (
  //             <ListItem key={item.id} divider>
  //               <ListItemText primary={item.text} />
  //             </ListItem>
  //           ))}
  //         </List>
  //       </Container>
  //     </Box>
  //   </Box>
  // );
}
