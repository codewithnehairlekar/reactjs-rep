import React from "react";
class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "child component mount");
    const data = await fetch(
      "https://api.github.com/users/codewithnehairlekar"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    //console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.login}</h2>
        <h3>location:{this.state.userInfo.url}</h3>
      </div>
    );
  }
}

export default UserClassComponent;
