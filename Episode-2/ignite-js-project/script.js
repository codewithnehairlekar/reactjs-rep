import React from "react";
import ReactDOM from "react-dom";

/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div>
*/
let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

/*let heading = React.createElement(
  "h1",
  { id: "header" },
  "Hello from React World"
);*/

//heading is object
console.dir(parent);

let root = ReactDOM.createRoot(document.getElementById("root"));

//render is creating object to tag and attaching to root
root.render(parent);
