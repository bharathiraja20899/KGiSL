import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  Step,
  Stepper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  AccountBalance,
  CheckBox,
  Search,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import AppStepper from "./stepper";
import Popper from "@mui/material/Popper";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const isBigScreen = useMediaQuery("(min-width:600px)");

  const options = [
    {
      id: 1,
      name: "Technical Problem",
    },
    {
      id: 2,
      name: "Change Your Plan",
    },
    {
      id: 3,
      name: "Change Your Device",
    },
  ];

  const emotes = [
    {
      component: <EmojiEmotionsSharpIcon fontSize="large" htmlColor="grey" />,
      color: "red",
    },
    {
      component: <EmojiEmotionsSharpIcon fontSize="large" htmlColor="green" />,
      color: "green",
    },
    {
      component: <EmojiEmotionsSharpIcon fontSize="large" htmlColor="grey" />,
      color: "yellow",
    },
    {
      component: <EmojiEmotionsSharpIcon fontSize="large" htmlColor="green" />,
      color: "blue",
    },
    {
      component: <EmojiEmotionsSharpIcon fontSize="large" htmlColor="grey" />,
      color: "violet",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);

  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      bgcolor={"whitesmoke"}
      sx={{
        background: `linear-gradient(to right, pink, rgba(255, 255, 255, 0.8))`,
      }}
    >
      {/* Header Section */}
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"white"}
        height={50}
      >
        <Typography variant="h6" color={"coral"} p={5} fontWeight={"bold"}>
          GenAI
        </Typography>
        <Box mr={5}>
          <MenuIcon />
        </Box>
      </Box>

      {/* Eye Section */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        pt={3}
        pr={5}
      >
        <RemoveRedEyeOutlinedIcon />
      </Box>

      {/* Search Bar Section */}
      <Box display={"flex"} flexDirection={"column"} px={20}>
        <Typography variant="body2">
          <strong>Ask me</strong> -eg: GreAI/ What the best way to looks like
          symphatic?
        </Typography>
        <Box mt={1} width={"100%"} boxShadow={5}>
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            //   label="TextField"
            placeholder="GreAI/"
            style={{
              backgroundColor: "white",
              borderColor: "white",
              //   borderRadius: 20,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Stepper */}
      <Box pt={5} pb={5} px={15}>
        <AppStepper setOpen={setOpen} open={open} />
      </Box>

      {/* Popver Details */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{
          width: "80%",
          height: "60%",
          justifySelf: "center",
          zIndex: 1,
        }}
      >
        <Box
          p={5}
          sx={{ scrollbarColor: "red", scrollbarWidth: "thin", zIndex: 2 }}
        >
          <Typography variant="body2" fontWeight={"bold"} mb={1}>
            Resume of Transcription
          </Typography>
          <Typography variant="body2">
            The customer said his{" "}
            <span
              style={{
                color: "blue",
                textDecorationLine: "underline",
                fontSize: "bold",
              }}
            >
              signal was lost this afternoon
            </span>{" "}
            and request an support though technical visit. He confirmed that{" "}
            <span
              style={{
                color: "blue",
                textDecorationLine: "underline",
                fontSize: "bold",
              }}
            >
              made all steps to reset the equipment
            </span>
            , but the problem keep happening. Was suggest to wait some couple
            hours to restore the signal into the area, but the customer was
            impatient
          </Typography>

          <span
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <Checkbox defaultChecked />
            Click to shift to
          </span>

          <Box
            mt={5}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            //   alignItems={"center"}
            gap={1}
          >
            <Typography variant="body2" fontWeight={"bold"} mb={1}>
              Transcription Detailed
            </Typography>
            <IconButton
              style={{ padding: 1 }}
              onClick={() => setShowContent(!showContent)}
            >
              {!showContent ? (
                <RemoveRedEyeOutlinedIcon fontSize="small" />
              ) : (
                <VisibilityOffOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Box>

          <Typography variant="body2">
            {showContent ? "Click to Show" : "Click to Close"}
          </Typography>

          {/* Options view */}
          {showContent ? (
            <Box
              display={"flex"}
              flexDirection={isBigScreen ? "row" : "column"}
              justifyContent={"space-between"}
            >
              {/* Left Side View */}
              <Box mt={5}>
                <Stack
                  direction={"row"}
                  height={70}
                  alignItems={"center"}
                  gap={2}
                >
                  <Box bgcolor={"skyblue"} p={2} borderRadius={"50%"}>
                    <SmartToyOutlinedIcon htmlColor="white" fontSize="medium" />
                  </Box>

                  <Box
                    position={"relative"}
                    display={"flex"}
                    flexDirection={"row"}
                    zIndex={3}
                  >
                    <Box
                      bgcolor={"lightgray"}
                      height={30}
                      width={30}
                      mt={2}
                      zIndex={1}
                      left={-2}
                      sx={{ transform: `rotate(40deg)` }}
                    ></Box>
                    <Typography
                      zIndex={2}
                      variant="body2"
                      p={1}
                      ml={-3}
                      bgcolor={"lightgray"}
                      borderRadius={4}
                      width={"60%"}
                    >
                      Hi, I'm Good Rob! Choose yours option so we can help you:
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction={"row"}
                  height={70}
                  alignItems={"center"}
                  gap={2}
                  mt={5}
                >
                  <Box bgcolor={"skyblue"} p={2} borderRadius={"50%"}>
                    <SmartToyOutlinedIcon htmlColor="white" fontSize="medium" />
                  </Box>

                  <Box
                    position={"relative"}
                    display={"flex"}
                    flexDirection={"row"}
                    zIndex={3}
                    width={"100%"}
                  >
                    <Box
                      bgcolor={"lightblue"}
                      height={30}
                      width={30}
                      mt={1.5}
                      zIndex={1}
                      left={-2}
                      sx={{ transform: `rotate(40deg)` }}
                    ></Box>
                    <Typography
                      variant="body2"
                      p={2}
                      ml={-3}
                      bgcolor={"lightblue"}
                      borderRadius={2}
                      width={"60%"}
                      zIndex={1}
                    >
                      Option1
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* Right Side View */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {options.map((item, index) => {
                  return (
                    <Box
                      width={"200px"}
                      my={0.5}
                      borderRadius={25}
                      border={1}
                      borderColor={"skyblue"}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Typography key={index} color={"skyblue"}>
                        {item.id}. {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ) : null}

          {/* Last View */}
          <Stack direction={"row"} width={"100%"} mt={10}>
            <Box width={"50%"} p={5} bgcolor={"lightblue"}>
              <Typography
                variant="body2"
                fontWeight={"bold"}
                color={"grey"}
                mb={2}
              >
                Client's Emotion
              </Typography>

              {/* Emotes */}
              <Stack direction={"row"}>
                {emotes.map((item, index) => {
                  return item.component;
                })}
              </Stack>
              <Stack direction={"row"} mt={1}>
                {emotes.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        height: 5,
                        width: 35,
                        backgroundColor: item.color,
                        borderTopLeftRadius: index == 0 ? 7 : 0,
                        borderBottomLeftRadius: index == 0 ? 7 : 0,
                        borderTopRightRadius: index == 4 ? 7 : 0,
                        borderBottomRightRadius: index == 4 ? 7 : 0,
                      }}
                    ></div>
                  );
                })}
              </Stack>

              <Stack
                direction={"row"}
                height={70}
                alignItems={"center"}
                gap={2}
                mt={5}
              >
                <Box bgcolor={"skyblue"} p={2} borderRadius={"50%"}>
                  <SmartToyOutlinedIcon htmlColor="white" fontSize="large" />
                </Box>
                Augusto Coimbra
              </Stack>
            </Box>
            <Box width={"50%"} p={5} bgcolor={"aliceblue"}>
              <Typography variant="body2" fontWeight={"bold"} color={"grey"}>
                Tips from GreAI
              </Typography>
              <Typography variant="body2" color={"grey"}>
                Show confidence; Maybe telling him that you will resolve the
                issue soon will be good
              </Typography>
              <Stack direction={"row"} gap={0}>
                <IconButton>
                  <ThumbUp htmlColor="blue" />
                </IconButton>
                <IconButton>
                  <ThumbDown />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default HomePage;
