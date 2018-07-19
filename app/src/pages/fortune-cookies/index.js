import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";

const li = cookie => {
  return (
    <li key={cookie.id} style={{ cookie: cookie.id }}>
      {cookie.value}
    </li>
  );
};

class Cookies extends React.Component {
  constructor() {
    super();
    this.state = { cookies: [] };
  }
  componentDidMount() {
    fetch("http://localhost:5000/fortune-cookies")
      .then(res => res.json())
      .then(cookies => this.setState({ cookies }));
  }
  render() {
    return (
      <div>
        <h1>Fortune Cookies</h1>
        <ul>{map(li, this.state.cookies)}</ul>
      </div>
    );
  }
}

export default Cookies;