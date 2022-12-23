import React from "react";
import { Provider } from "react-redux";
import { store } from "$store/store";
import { Main } from "components/Main";

const App: React.FC = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
