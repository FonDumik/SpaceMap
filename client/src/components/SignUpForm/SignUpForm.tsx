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
  Slide,
  SlideProps,
} from "@mui/material";
import { useStyles } from "./styles";

export const SignUpForm = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const signUpHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <Slide {...props}>
      <div className={classes.authFormWrapper}>
        <div className={classes.centeredBlock}>
          <Typography variant='h1'>Create account</Typography>
          <Typography variant='body1'>
            Enter your data to this form to create new account
          </Typography>

          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            onSubmit={signUpHandler}
            autoComplete='off'>
            <div className={classes.formFields}>
              <TextField
                required
                id='email'
                type='email'
                label='Email'
                variant='standard'
              />
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
              Sign Up
            </Button>
          </Box>
        </div>
      </div>
    </Slide>
  );
};
