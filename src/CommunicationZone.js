import React, { Component } from "react";
import "./App.css";
import InputZone from "./InputZone";
import ChatZone from "./ChatZone";
import ContactWindow from "./ContactWindow";
import data from "./data.json";

class CommunicationZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      disposable: "",
      history: ["How can I help?"],
      //   msgs: [],
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount = () => {
    // let user= data.filter((user) => user.contact === this.props.user.contact),
    this.setState({
      history: [...this.state.history, ...this.props.user.messages],
    });
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (event.key === "Enter") {
      this.setState({
        value: "",
        disposable: event.target.value,
        history: [...this.state.history, event.target.value],
        // msgs: this.state.msgs.push(event.target.value),
      });

      setTimeout(() => this.dialogueEngine(), 3000);
      //     function () {
      //       this.dialogueEngine();
      //     }.bind(this),
      //     3000
      //   );
    }
    this.cleanHistory();
  };

  dialogueEngine() {
    const answersBasic = [
      "can you elaborate?",
      "and why do you believe that is so?",
      "can you be more specific?",
      "what would be your guess?",
      "I need more details for this one",
    ];
    const answersAdvanced = [
      "have you check the logs?",
      "have you tried restarting?",
      "what does the documentation say?",
      "Maybe its a typo",
    ];
    const answersAdjust = [
      "you need to be a bit more specific",
      "come on I am trying to help",
      "whatever",
      "that does not sound like a bug",
    ];

    if (this.state.disposable.length <= 7) {
      let response =
        answersAdjust[Math.floor(Math.random() * answersAdjust.length)];
      this.setState({
        history: [...this.state.history, response],
      });
    } else if (
      this.state.history.length <= 3 &&
      this.state.disposable.length > 6
    ) {
      let response =
        answersBasic[Math.floor(Math.random() * answersBasic.length)];
      this.setState({
        history: [...this.state.history, response],
      });
    } else if (this.state.history.length >= 4) {
      let response =
        answersAdvanced[Math.floor(Math.random() * answersAdvanced.length)];
      this.setState({
        history: [...this.state.history, response],
      });
    }
  }

  cleanHistory() {
    const tempHistory = this.state.history;
    let newHistory = [];
    if (this.state.history.length > 12) {
      tempHistory.shift();
      tempHistory.shift();
      newHistory = tempHistory;
      this.setState({
        history: newHistory,
      });
    }
  }

  render() {
    return (
      <div className="chatHost innerShadow">
        <ContactWindow userName={this.props.user.contact} />
        <ChatZone
          //   userName={this.props.user.contact}
          //   chatItem={this.props.user.messages}
          chatItem={this.props.user.messages}
        />
        {console.log(this.props.user)}
        <InputZone
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default CommunicationZone;
