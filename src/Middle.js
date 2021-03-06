import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bottom from "./Bottom";
import AnotherMiddle from "./AnotherMiddle";

const Middle = ({ children }) => {
  return (
    <div>
      Middle
      <AnotherMiddle {...children} />
    </div>
  );
};

export default Middle;
