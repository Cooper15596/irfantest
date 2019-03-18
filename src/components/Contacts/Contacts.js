import React, { Component } from "react";
import "./Contacts.scss";
import ContactsData from "../../helpers/ContactsData";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts-root">
        <div className="header">
            <input type="search" placeholder="Search"/>   
        </div>
        <div className="contacts-container">
          {ContactsData.map(contact => {
            return (
              <div className="contact">
                <div className="img-container">
                  <img src={contact.image} />
                  <div
                    className={
                      contact.online
                        ? "online-indicator online"
                        : "online-indicator"
                    }
                  >
                    <div className="round" />
                  </div>
                </div>
                <div className="main">
                  <div className="name">{contact.name}</div>
                  <div className="last-msg">{contact.last_msg}</div>
                </div>
                <div className="info">
                  <div className="more">. . .</div>
                  <div className="last-seen">{contact.last_seen}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contacts;
