// Import the react and the react Dom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
function getButtonText() {
    return 'click on me!';
};

const App = function() {
    const buttonText = 'Click Me!';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show it on the DOM
ReactDOM.render(<App />, document.querySelector("#root"));
