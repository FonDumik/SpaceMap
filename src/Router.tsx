import { Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import { Main } from "./pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Main />} />

      {/* <Route>
        <Typography variant='h1'>404 Not Found!</Typography>
      </Route> */}
    </Routes>
  );
};

export default Router;
