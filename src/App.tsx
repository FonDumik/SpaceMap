import React from "react";
import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppNavigation } from "./components";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
