import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  render() {
    return <h1 className="title">خانه</h1>;
  }
}
export default Home;
