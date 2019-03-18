import React, { Component } from "react";
import "./Dashboard.scss";
import AppSwitcher from "../AppSwitcher/AppSwitcher";
import Inbox from "../Inbox/Inbox";
import Contacts from "../Contacts/Contacts";
import Chat from "../Chat/Chat";
import Profile from "../Profile/Profile";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-root">
        <AppSwitcher />
        <Inbox />
        <Contacts />
        <Chat />
        <Profile />
      </div>
    );
  }
}

export default Dashboard;
