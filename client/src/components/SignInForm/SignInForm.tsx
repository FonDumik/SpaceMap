import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  SlideProps,
} from "@mui/material";
import { useStyles } from "./styles";
import { Slide } from "@material-ui/core";

export const SignInForm = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const signInHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <Slide {...props}>
      <div className={classes.authFormWrapper}>
        <div className={classes.centeredBlock}>
          <Typography variant='h1'>Hello again!</Typography>
          <Typography variant='body1'>
            Enter your data to this form to connect with your account
          </Typography>

          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            onSubmit={signInHandler}
            autoComplete='off'>
            <div className={classes.formFields}>
              <TextField
                required
                id='username'
                type='text'
                label='Username'
                variant='standard'
              />
              <TextField
                required
                id='password'
                type={showPassword ? "text" : "password"}
                label='Password'
                autoComplete='current-password'
                variant='standard'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button color='inherit' variant='outlined' type='submit'>
              Sign In
            </Button>
          </Box>
        </div>
      </div>
    </Slide>
  );
};
