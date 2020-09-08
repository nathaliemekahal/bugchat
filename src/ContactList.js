import React, { Component } from "react";
import "./contactlist.css";
import CommunicationZone from "./CommunicationZone";
import data from "./data.json";
// import ContactList from "./ContactList";
class ContactList extends Component {
  userHandler = (user) => {
    console.log("user", user);
    this.props.fn(user);
  };
  render() {
    return (
      <div className="contactList">
        {data.map((user) => (
          <li className="contactList__user" onClick={() => this.props.fn(user)}>
            {user.contact}
          </li>
        ))}
      </div>
    );
  }
}

export default ContactList;
