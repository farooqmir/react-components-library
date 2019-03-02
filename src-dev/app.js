import React from "react";
import ReactDOM from "react-dom";
import Article, { Footer } from "../src"; //ddfsdfsdfdfdf  sd

const App = props => {
  return (
    <div>
      <Article />
      <Footer />

      <p>This is a sample article.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
