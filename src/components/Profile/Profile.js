import React, { Component } from "react";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile-root">
        <div className="header">
          <div className="icon notif">
            <img src={require("../../assets/images/bell.svg")} />
          </div>
          <div className="user">Johan Horn</div>
        </div>
        <div className="content">
          <div className="content-head">
            <img src={require("../../assets/images/gmail.svg")} />
            <div>. . .</div>
          </div>
          <div className="profile-top">
            <img src={require("../../assets/images/man1.svg")} />
            <div className="user-name">Matt Thompson</div>
            <div className="user-location">Cape Town, RSA</div>
          </div>
          <div className="details">
            <div className="row">
              <div className="label">Nickname:</div>
              <div className="value">Triple T</div>
            </div>
            <div className="row">
              <div className="label">Tel:</div>
              <div className="value">021 88 237 8890</div>
            </div>
            <div className="row">
              <div className="label">Date of Birth:</div>
              <div className="value">June 20th 1983</div>
            </div>
            <div className="row">
              <div className="label">Gender:</div>
              <div className="value">Male</div>
            </div>
            <div className="row">
              <div className="label">Language:</div>
              <div className="value">English</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
