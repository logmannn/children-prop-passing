import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bottom from "./Bottom";

const AnotherMiddle = ({ props }) => {
  console.log("anothermiddle ");
  console.log(props);
  return (
    <div>
      AnotherMiddle
      <Bottom {...props} />
    </div>
  );
};

export default AnotherMiddle;
