"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button as MuiButton,
  Container,
  Typography,
  Modal,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SideBarComponent from "@/components/ui/SideBarComponent"; // Adjust the import path as necessary
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import AnimatedText from "@/components/ui/AnimatedText";
// import { motion } from "framer-motion";

// const sentiments = ["positive", "negative", "neutral"];
// const placeholder = {
//   entries: [
//     {
//       date: "2023-10-01",
//       text: "I can't seem to shake off this feeling of unease.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-02",
//       text: "It feels like there's a cloud of worry hanging over me.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-03",
//       text: "I keep replaying worst-case scenarios in my mind.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-04",
//       text: "Sleep has become elusive because of this constant worry.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-05",
//       text: "My mind feels like a pressure cooker, always on the edge.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-06",
//       text: "It's hard to focus on anything when anxiety keeps creeping in.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-07",
//       text: "I feel a knot in my stomach that refuses to go away.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-08",
//       text: "Sometimes I feel like I'm drowning in a sea of anxious thoughts.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-09",
//       text: "My heart races even at the smallest triggers.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-10",
//       text: "The uncertainty of the future is overwhelming me.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-11",
//       text: "I often find myself overthinking even the simplest decisions.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-12",
//       text: "It feels like there's a tight grip around my chest, making it hard to breathe.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-13",
//       text: "The fear of something going wrong is always lurking in the back of my mind.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-14",
//       text: "It's frustrating how easily my mind jumps to the worst-case scenario.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-15",
//       text: "Anxiety has turned even the smallest tasks into daunting challenges.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-16",
//       text: "It's exhausting to constantly battle with my own mind.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-17",
//       text: "I feel like I'm walking on eggshells, afraid of triggering my anxiety.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-18",
//       text: "My mind is constantly racing, making it hard to find peace.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-19",
//       text: "The feeling of impending doom hangs heavy on my shoulders.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//     {
//       date: "2023-10-20",
//       text: "It's hard to explain to others how anxiety can take over your life.",
//       sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
//     },
//   ],
// };

const backendUrl = "http://10.2.143.209/";

export default function User({ params }) {
  const { id } = params;
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, [chats]);

  useEffect(() => {
    fetch(backendUrl + "chats/" + id, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChats(data.chats);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const sentimentClasses = {
    positive: "hover:bg-yellow-50",
    negative: "hover:bg-blue-50",
    neutral: "hover:bg-gray-100",
  };

  const handleOnSubmit = () => {
    event.preventDefault();
    console.log(id);
    fetch(backendUrl + "chat/llama", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: id,
        chat: currentChat,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentChat("");
        if (!chats || chats.length === 0) {
          setChats([data]);
        } else {
          setChats([...chats, data]);
        }
      });
  };

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SideBarComponent />

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh", // Center vertically
            maxWidth: { xs: "80%", sm: "75%" },
            margin: "auto",
            p: 2,
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <Container
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* { Check if the chat.id is available */}
            {chats &&
            chats.length &&
            chats.find((chat) => chat.id === inputValue) === undefined ? (
              <Typography variant="body1" color="text.secondary" gutterBottom>
                No chat history found.
              </Typography>
            ) : (
              <>
                <AnimatedText chats={chats} inputValue={inputValue} />
                {/* <p className="text-2xl  text-gray-400 pop-up">
                  <span className="text-gray-400">On {chats?.find((chat) => chat.id === inputValue)?.date}, you
                  remarked that{" "}</span> 
                  <span className="italic"> &quot;{chats?.find((chat) => chat.id === inputValue)?.chat}&quot;</span>
                  {". "}
                  This indicates symptoms of{" "}
                  <span className="italic text-black">
                  {chats?.find((chat) => chat.id === inputValue)?.data.category}{" "}
                  </span>
                  with intensity of{" "}
                  <span className="italic text-black">
                  {
                    chats?.find((chat) => chat.id === inputValue)?.data
                      .intensity
                  }{" "}
                  </span>
                  and is{" "}
                  <span className={clsx(
                    "italic text-black",
                    chats?.find((chat) => chat.id === inputValue)?.data.type === "positive"
                      ? "text-green-500"
                      : chats?.find((chat) => chat.id === inputValue)?.data.type === "negative"
                      ? "text-red-500"
                      : ""
                  )}>
                  {chats?.find((chat) => chat.id === inputValue)?.data.type}{" "}
                  </span> 
                  for you.
                </p> */}
                {/* <Typography variant="body1" color="text.secondary" gutterBottom>
                  {chats?.find((chat) => chat.id === inputValue)?.date}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {chats?.find((chat) => chat.id === inputValue)?.chat}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Category:{" "}
                  {chats?.find((chat) => chat.id === inputValue)?.data.category}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Type:{" "}
                  {chats?.find((chat) => chat.id === inputValue)?.data.type}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Intensity:{" "}
                  {
                    chats?.find((chat) => chat.id === inputValue)?.data
                      .intensity
                  }
                </Typography> */}
              </>
            )}
          </Container>
        </Box>
      </Modal>

      <div className="m-3 flex flex-col items-center justify-center leading-10">
        <div className="w-full max-w-lg gap-1.5">
          <form onSubmit={handleOnSubmit}>
            <Label htmlFor="message" className="mb-2 ml-2 text-lg font-bold">
              Todays Thoughts
            </Label>
            <div className="flex flex-row">
              <Input
                id="message"
                placeholder="I am feeling..."
                value={currentChat}
                onChange={(e) => setCurrentChat(e.target.value)}
              />
              <button
                className="ml-2 mt-1 h-0 w-0 border-b-[1em] border-l-[1em] border-t-[1em] border-b-transparent border-l-black border-t-transparent"
                type="submit"
              ></button>
            </div>
          </form>
        </div>
        <div className="mt-6" id="History">
          <center>
            <Label htmlFor="History" className="ml-2 text-3xl font-bold">
              History
            </Label>
          </center>
          {chats?.length === 0 ? null : (
            <div class="wrap">
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="petal"></div>
              <div class="center"></div>
            </div>
          )}

          <div
            ref={containerRef}
            className="max-w-md"
            style={{ marginBottom: `${Math.floor(-height)}px` }}
          >
            {chats?.length === 0 ? (
              <Typography variant="body1" color="text.secondary" gutterBottom>
                No chat history found.
              </Typography>
            ) : (
              chats
                ?.slice()
                .reverse()
                .map((entry, index) => (
                  // <motion.div
                  //   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  //   animate={{ opacity: 1, x: index % 2 === 0 ? -50 : 10 }}
                  //   transition={{ duration: 0.5 }}

                  // >
                  <Card
                    key={index} // Add a unique key prop
                    className={clsx(
                      "relative mb-12 p-4 leading-5 hover:scale-[1.02]",
                      sentimentClasses[entry.sentiment],
                      index % 2 === 0 ? "-left-1/4" : "-right-1/4",
                    )}
                  >
                    <CardContent className="flex flex-col">
                      <div className="text-sm text-gray-500">{entry.date}</div>
                      <div className="flex">
                        <div className="mt-1.5 w-[90%] content-center break-words text-lg">
                          {entry.chat}
                        </div>
                        <MuiButton
                          variant="contained"
                          className={clsx(
                            "text-md ml-1.5 mt-1.5 flex h-min w-min items-center justify-center px-2 py-2",
                          )}
                          onClick={() => {
                            setIsModalOpen(true);
                            setInputValue(entry.id);
                          }}
                        >
                          <span className="ml-2 mr-0.5 text-sm">View More</span>
                          <ChevronRightIcon fontSize="medium" />
                        </MuiButton>
                      </div>
                    </CardContent>
                  </Card>
                ))
            )}
          </div>
        </div>
        <div
          style={{ height: `${Math.floor(height)}px` }}
          className="mt-4 w-12 bg-green-400"
        ></div>
        <div className="w-full">
          <div className="mx-auto h-32 w-1/2 rounded-xl border-8 border-brown-900 bg-brown-800" />
          <div className="mx-auto h-32 w-2/5 rounded-xl rounded-t-none border-8 border-t-0 border-brown-900 bg-brown-800" />
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
