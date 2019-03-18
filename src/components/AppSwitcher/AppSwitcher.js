import React, { Component } from "react";
import "./AppSwitcher.scss";

class AppSwitcher extends Component {
  render() {
    return (
      <div className="app-switcher-root">
        <div className="icon menu">
          <img src={require("../../assets/images/menu.svg")} />
        </div>
        <div className="apps-container">
          <div className="icon">
            <img src={require("../../assets/images/whatsapp.svg")} />
          </div>
          <div className="icon">
            <img src={require("../../assets/images/gmail.svg")} />
          </div>
          <div className="icon">
            <img src={require("../../assets/images/skype.svg")} />
          </div>
          <div className="icon">
            <img src={require("../../assets/images/slack.svg")} />
          </div>
          <div className="icon add">
            <img src={require("../../assets/images/add.svg")} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppSwitcher;
