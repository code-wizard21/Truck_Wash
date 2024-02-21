import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RoutesDefined from "./router";
import { Provider } from "react-redux";
import  store  from "./redux/store";

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <Provider store={store}>
      <RoutesDefined />
    </Provider>
  );
}

export default App;
