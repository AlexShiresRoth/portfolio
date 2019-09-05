import React, { Fragment } from "react";
import axios from "axios";
import "../css/main.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      message: ""
    };
  }

  handleNameInput = event => {
    let fullName = event.target.value;
    fullName !== "" ? this.setState({ fullName: fullName }) : "";
  };
  handleEmailInput = event => {
    let email = event.target.value;
    email !== "" ? this.setState({ email: email }) : "";
  };
  handleMessageInput = event => {
    let message = event.target.value;
    message !== "" ? this.setState({ message: message }) : "";
  };

  formSubmit = async e => {
    e.preventDefault();

    const messageInfo = {
      name: this.state.fullName,
      email: this.state.email,
      message: this.state.message
    };
    return await axios({
      method: "post",
      url: `http://localhost:5000/api/send-email?email=${messageInfo.email}&name=${messageInfo.name}&message=${messageInfo.message}`,
      data: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  renderForm = () => {
    return (
      <div className="section__contact">
        <div className="section__contact--container">
          <h2>Want to work together?</h2>
          <form
            onSubmit={this.formSubmit}
            className="section__contact--container--form"
          >
            <div className="section__contact--container--form--input-row">
              <div className="section__contact--container--form--input-row--icon-box">
                <i class="far fa-user"></i>
              </div>
              <input
                name="name"
                type="text"
                placeholder="First & Last Name"
                value={this.state.fullName}
                onChange={this.handleNameInput}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <div className="section__contact--container--form--input-row--icon-box">
                <i class="far fa-envelope"></i>
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailInput}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <textarea
                name="message"
                type="text"
                placeholder="Enter your message"
                rows="10"
                value={this.state.message}
                onChange={this.handleMessageInput}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <button onClick={this.formSubmit}>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  render() {
    return <Fragment>{this.renderForm()}</Fragment>;
  }
}
