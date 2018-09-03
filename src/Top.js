import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Middle from "./Middle";
import Bottom from "./Bottom";

class Top extends Component {
  render() {
    return (
      <div>
        <Middle>
          <Bottom text="Bottom" />
        </Middle>
      </div>
    );
  }
}

export default Top;
