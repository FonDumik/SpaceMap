import { Box, Typography } from "@mui/material";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDefaultStyles } from "../../models/main/styles";
import { mainStateSelector } from "../../selectors";

export const Loading: React.FC = () => {
  const mainState = useSelector(mainStateSelector);
  const classes = useDefaultStyles();

  return (
    <>
      {mainState.additional.isGeoAllowed ? (
        <ThreeCircles
          height='200'
          width='200'
          color='#dedede'
          wrapperClass={classes.centeredObject}
          visible={true}
          ariaLabel='three-circles-rotating'
          outerCircleColor=''
          innerCircleColor=''
          middleCircleColor=''
        />
      ) : (
        <Typography
          variant='h4'
          component='div'
          className={classes.centeredObject}>
          {mainState.additional.message}
        </Typography>
      )}
    </>
  );
};
