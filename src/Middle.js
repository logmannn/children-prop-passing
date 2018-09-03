import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bottom from "./Bottom";

const Middle = ({ children }) => {
  return (
    <div>
      Middle
      <Bottom {...children} />
    </div>
  );
};

export default Middle;
