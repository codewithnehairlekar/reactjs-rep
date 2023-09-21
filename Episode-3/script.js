import React from "react";
import ReactDOM from "react-dom";

let ele = <span>React Element</span>;

let title = (
  <h1 id="header" className="head" tabIndex="5">
    {ele}
    <br></br>
    Namaste React From JSX
  </h1>
);

//React function component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste react functional component</h1>
  </div>
);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
