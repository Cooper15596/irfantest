import React, { Component } from "react";
import "./Chat.scss";

class Chat extends Component {
  render() {
    return (
      <div className="chat-root">
        <div className="header">
          <div className="contact-info">
            Matt Thompson <span>is typing...</span>
          </div>
          <div className="cta-container">
            <div className="cta fav">
              <img src={require("../../assets/images/star.svg")} />
            </div>
            <div className="cta voice">
              <img src={require("../../assets/images/phone.svg")} />
            </div>
            <div className="cta video">
              <img src={require("../../assets/images/video.svg")} />
            </div>
          </div>
        </div>
        <div className="chat-container">
          <div className="msg-container received">
            <div className="user-info">
              <img src={require("../../assets/images/man1.svg")} />
              <div className="time">14:32</div>
            </div>
            <div className="msg">
              Jo what's a nice chill movie I can go watch with my mom?
            </div>
          </div>

          <div className="msg-container sent">
            <div className="user-info">
              <img src={require("../../assets/images/man6.svg")} />
              <div className="time">14:32</div>
            </div>
            <div className="msg">
              Well there's a few showing at the moment. Do you mind a romance
              drama type of movie?
            </div>
          </div>

          <div className="msg-container received">
            <div className="user-info">
              <img src={require("../../assets/images/man1.svg")} />
              <div className="time">14:32</div>
            </div>
            <div className="msg">Ya man that would be fine.</div>
          </div>

          <div className="msg-container sent">
            <div className="user-info">
              <img src={require("../../assets/images/man6.svg")} />
              <div className="time">14:32</div>
            </div>
            <div className="msg">
              Okay you should watch 50 shades - don't watch the trailer. It will
              spoil the movie for you. It has some adorable moments.
            </div>
          </div>
          <div className="msg-container sent">
            <div className="user-info">
              <img src={require("../../assets/images/man6.svg")} />
              <div className="time">14:32</div>
            </div>
            <div className="msg">
              <img src={require("../../assets/images/50s.jpg")} />
              <div className="title-container">
                <div className="title">
                  50 Shades of Grey <span>/ Romance</span>
                </div>
              </div>
              <div className="description">
                Fifty Shades of Grey is a 2015 American erotic romantic drama
                film directed by Sam Taylor-Johnson, with a screenplay by Kelly
                Marcel.
              </div>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
