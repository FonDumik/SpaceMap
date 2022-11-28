import React from "react";
import { Provider } from "react-redux";
import { store } from "$store/store";
import "./App.css";
import { AppNavigation } from "$components";

const App: React.FC = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
