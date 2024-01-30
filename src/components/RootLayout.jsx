import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store/store";
import { MDBContainer } from "mdb-react-ui-kit";

function RootLayout() {
  return (
    <MDBContainer>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </MDBContainer>
  );
}

export default RootLayout;
