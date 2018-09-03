import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Bottom = ({ children }) => {
  console.log("bottom");
  console.log(children.props);
  return (
    <div>
      {children.props.text}
      <button onClick={() => children.props.changeText("BottomCallback")}>
        Simple Callback
      </button>
    </div>
  );
};

export default Bottom;
