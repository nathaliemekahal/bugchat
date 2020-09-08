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
      <div className="contactList innerShadow">
        {data.map((user) => (
          <div className="contactList__userWrapper">
            <img
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
            />
            <li
              className="contactList__user"
              onClick={() => this.props.fn(user)}
            >
              {user.contact}
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactList;
