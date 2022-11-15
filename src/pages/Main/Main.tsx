import React from "react";
import { AppNavigation, YMap } from "../../components";

export const Main: React.FC = () => {
  const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

  return (
    <main>
      <AppNavigation />
      <YMap />
    </main>
  );
};
