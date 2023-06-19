import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState (0);
const [emoteCount, setEmoteCount] = useState (0);

const addHandler = () =>{
    setCount(count + 1);
    setEmoteCount(emoteCount + 1);
};

const subtractHandler = () =>{
    if (count > 0){
    setCount(count - 1);
    setEmoteCount(emoteCount - 1);
    }
};

const renderEmoticons = () =>{
    const emoticons = [];
    for (let i = 0; i < emoteCount; i++) {
        emoticons.push(<span key={i} role="img" aria-label="emoticon">😊</span>);
    }
    return emoticons;
}

return (
    <div>
      <header className="App-header">
        <h1 id="countTitle">Counter</h1>
        <div id="container">
          <button id="subtract" onClick={subtractHandler}>Subtract one</button>
          <span id="count">{count}</span>
          <button id="add" onClick={addHandler}>Add one</button>
        </div>
        <div id="emote">
          <span id="emoticon">{renderEmoticons()}</span>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </header>
    </div>
  );
}

export default Counter;