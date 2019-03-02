import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "../src";

const App = () => {
  return (
    <div>
      <Heading />
      <p>This is a sample article.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
