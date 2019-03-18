import React, { Component } from "react";
import "./Inbox.scss";
import InboxData from "../../helpers/InboxData";

class Inbox extends Component {
  render() {
    return (
      <div className="inbox-root">
        <div className="header">
          <div className="label">Inbox</div>
          <div className="add">
            <img src={require("../../assets/images/userplus1.svg")} />
          </div>
        </div>
        <div className="sections-container">
          {InboxData.sections.map(section => {
            return (
              <div className="section">
                {section.map(tab => {
                  return (
                    <div className="tab">
                      <div className="label">{tab.label}</div>
                      {tab.count > 0 && (
                        <div className="count">{tab.count}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inbox;
