import React from "react";
import "./App.css";

function ContactWindow({ userName }) {
  return (
    <div className="headerWrapper">
      <span className="contactName">{userName}</span>
    </div>
  );
}

export default ContactWindow;
