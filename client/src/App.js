import React from "react";
import RoutesDefined from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { jwtDecode } from "jwt-decode";

const localstorage = localStorage.getItem("authToken");
if (localstorage) {
  const decodedToken = jwtDecode(localstorage);
  store.dispatch({ type: "LOGIN_REQUEST", payload: decodedToken });
}

const App = () => {
  return (
    <Provider store={store}>
      <RoutesDefined />
    </Provider>
  );
};

export default App;
