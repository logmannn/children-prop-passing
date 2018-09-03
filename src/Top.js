import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Middle from "./Middle";
import Bottom from "./Bottom";
import AnotherMiddle from "./AnotherMiddle";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "bottom" };
  }
  render() {
    return (
      <div>
        <Middle>
          <AnotherMiddle>
            <Bottom
              text={this.state.text}
              changeText={text => this.setState({ text })}
            />
          </AnotherMiddle>
        </Middle>
      </div>
    );
  }
}

export default Top;
