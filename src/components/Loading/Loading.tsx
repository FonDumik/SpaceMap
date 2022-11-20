import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import { mainStateSelector } from "../../selectors";

export const Loading: React.FC = () => {
  const mainState = useSelector(mainStateSelector);

  return (
    <>
      {mainState.additional.isGeoAllowed ? (
        <HalfMalf width={"200px"} height={"200px"} center={true} />
      ) : (
        <Typography
          variant='h4'
          component='div'
          style={{
            display: "flex",
            width: "calc(100vw - 64px)",
            height: "calc(100vh - 64px)",
            alignItems: "center",
            textAlign: "center",
          }}>
          {mainState.additional.message}
        </Typography>
      )}
    </>
  );
};
