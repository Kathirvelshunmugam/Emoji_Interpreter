import React, { useState } from "react";

import "./styles.css";

const emojiDictionary = {
  "🚗": "Red Car",

  "🚙": "Blue Car",

  "🏎️": "Race Car",

  "🚕": "Taxi",

  "🚓": "Police Car",

  "🚘": "Sports car",

  "🚖": "Yellow Car",

  "🚔": "Police speed car",

  "🏆": "Trophy",

  "🚡": "Sky car",

  "🚠": "Hill car"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This Emoji is not available in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav> Car Emoji </nav>

      <div className="para">
        Do you also find it hard to figure out the meaning of emojis ?🤔 So
        here's a emoji dictionary for you, wherein you can enter an emoji and we
        will tell you its meaning in seconds.😎
      </div>

      <input onChange={inputChangeHandler}></input>

      <h2>{meaning}</h2>

      <h3> Click on emojis to know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{
              fontSize: "3rem",
              padding: "1rem, 0.5rem",
              margin: "1rem",
              cursor: "Pointer"
            }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
