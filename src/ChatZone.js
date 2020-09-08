import React, { useEffect } from "react";
import Snippet from "./Snippet";
import "./App.css";

export default function ChatZone({ chatItem, userName }) {
  const history = chatItem;

  useEffect(() => {
    let sentMsgs = chatItem.filter((item) => item.from === userName);
    let receivedMsgs = chatItem.filter((item) => item.from !== userName);
  }, []);
  return (
    <div className="innerShadow">
      <div className="chatWrap">
        {chatItem.filter}
        {history.map((item, index) => (
          <Snippet key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
