import React from "react";
import { Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="App-header justify-content-center"
      >
        <h1 href="/">Weather App</h1>
      </Navbar>
    </>
  );
};

export default AppNavbar;
