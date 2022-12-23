import { Box, Button, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useRef, useState } from "react";
import { useDefaultStyles } from "../../models/main/styles";
import { useStyles } from "./styles";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { SignUpForm, SignInForm } from "../../components";

export const Authorization: React.FC = () => {
  const defaultClasses = useDefaultStyles();
  const classes = useStyles();
  const containerRef = useRef(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);

  const changeRegisterMethod = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className={`${classes.authContainer} ${defaultClasses.defaultSize}`}>
      <MouseParallaxContainer
        className={classes.parallax}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave>
        <MouseParallaxChild
          factorX={0.6}
          factorY={0.1}
          style={{
            backgroundImage: "url(images/bgAuth1.png)",
            backgroundPositionY: "50%",
            transform: "scale(1.2)",
            position: "absolute",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            display: "flex",
            backfaceVisibility: "hidden",
          }}
        />
        <MouseParallaxChild
          factorX={0}
          factorY={0}
          style={{
            display: "flex",
          }}>
          <div
            className={`${classes.centeredBlock} ${classes.authCenteredBlock}`}>
            <Typography variant='h1'>Welcome!</Typography>
            <Typography variant='subtitle1'>
              {isRegistered
                ? "If you already have an account here, press"
                : "If you want to create new account, press"}
            </Typography>
            <Button
              color='inherit'
              variant='outlined'
              onClick={changeRegisterMethod}>
              {isRegistered ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>

      <div className={classes.signWrapper} ref={containerRef}>
        <SignInForm
          direction='down'
          in={!isRegistered}
          mountOnEnter
          unmountOnExit
          container={containerRef.current}
        />
        <SignUpForm
          direction='up'
          in={isRegistered}
          mountOnEnter
          unmountOnExit
        />
      </div>
    </div>
  );
};
