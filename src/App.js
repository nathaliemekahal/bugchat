import React, { useState } from "react";
import "./App.css";
import CommunicationZone from "./CommunicationZone";
import ContactList from "./ContactList";

function App() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  const changeUser = (user) => {
    setUser(user);
  };
  return (
    <div className="App">
      <div className="mainContainer">
        <ContactList fn={changeUser} />

        {user && <CommunicationZone user={user} />}
      </div>
    </div>
  );
}

export default App;
