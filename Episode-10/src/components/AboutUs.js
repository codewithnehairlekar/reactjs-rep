import UserComponent from "./UserComponent";
import UserClassComponent from "./UserClassComponent";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount() {
    //console.log("Parent component did mount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react series</h2>
        <UserClassComponent
          name={"first Nagesh Bhosle"}
          location={"Dehradun Class"}
        />
        <UserClassComponent
          name={" second Neha Bhosle"}
          location={"amsterdam Class"}
        />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react series</h2>
//       <UserClassComponent
//         name={"Akshay Saini (classes)"}
//         location={"Dehradun Class"}
//       />
//     </div>
//   );
// };

export default AboutUs;
