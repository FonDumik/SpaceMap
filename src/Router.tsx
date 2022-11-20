import React from "react";
import { Route, Routes } from "react-router";
import { Main, Profile, Settings, About } from "./pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Main />} />
      <Route path={`/profile`} element={<Profile />} />
      <Route path={`/settings`} element={<Settings />} />
      <Route path={`/about`} element={<About />} />
    </Routes>
  );
};

export default Router;
