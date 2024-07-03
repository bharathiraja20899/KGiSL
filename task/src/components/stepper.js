import React, { useState } from "react";
import {
  Box,
  IconButton,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PhonePausedOutlinedIcon from "@mui/icons-material/PhonePausedOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AppStepper = ({ setOpen, open }) => {
  // Variable to handle  stepper current position
  const [activeStepper, setCurrentStepper] = useState(2);

  // List of stepper lables
  const lables = [
    {
      name: "Home",
      val: null,
      icon: (completed) => {
        return (
          <Box
            bgcolor={"white"}
            p={2}
            borderRadius={50}
            boxShadow={2}
            border={1}
            borderColor={"skyblue"}
          >
            <HomeOutlinedIcon fontSize="large" htmlColor="skyblue" />
          </Box>
        );
      },
    },

    {
      name: "Call",
      val: "8 mins",
      icon: (completed) => {
        return (
          <Box
            bgcolor={"white"}
            p={2}
            borderRadius={50}
            boxShadow={2}
            border={1}
            borderColor={"skyblue"}
          >
            <CallOutlinedIcon fontSize="large" htmlColor="skyblue" />
          </Box>
        );
      },
    },
    {
      name: "Phone",
      val: "12 mins",
      icon: (completed) => {
        return (
          <Box
            bgcolor={"lightblue"}
            p={2}
            borderRadius={50}
            boxShadow={2}
            border={1}
            borderColor={"skyblue"}
            position={"relative"}
          >
            <PhonePausedOutlinedIcon fontSize="large" htmlColor="white" />
            <CheckCircleIcon
              style={{ position: "absolute", bottom: -8, right: -10 }}
              htmlColor="green"
              fontSize="large"
            />
            {open ? (
              <Box
                position={"absolute"}
                bgcolor={"white"}
                height={30}
                width={30}
                bottom={-40}
                sx={{ transform: `rotate(45deg)` }}
              ></Box>
            ) : null}
          </Box>
        );
      },
    },
    {
      name: "Account",
      val: null,
      icon: (completed) => {
        return (
          <Box
            bgcolor={"white"}
            p={2}
            borderRadius={50}
            boxShadow={2}
            border={1}
            borderColor={"skyblue"}
          >
            <AccountCircleOutlinedIcon fontSize="large" htmlColor="skyblue" />
          </Box>
        );
      },
    },
  ];

  // Variable to handle onChange stepper
  const onChangeStepper = (value) => {
    console.log("Val", value);
    setOpen(true);
    setCurrentStepper(value);
  };

  return (
    <Stepper nonLinear activeStep={activeStepper}>
      {lables.map((item, currentIndex) => {
        return (
          <Step key={currentIndex} completed={currentIndex <= activeStepper}>
            <StepButton
              disabled={currentIndex != activeStepper}
              icon={item.icon(currentIndex <= activeStepper)}
              color="inherit"
              onClick={() => onChangeStepper(currentIndex)}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: currentIndex <= activeStepper ? "green" : "grey",
                }}
                variant="body2"
              >
                {item.val ? item.val : null}
              </Typography>
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default AppStepper;
