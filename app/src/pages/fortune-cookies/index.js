import React from "react";
// import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";

const li = cookie => {
  return (
    <li key={cookie.id} style={{ cookie: cookie.name }}>
      {cookie.value}
    </li>
  );
};

const Cookies = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      <ul>{map(li, props.fortuneCookies)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { fortuneCookies: state.fortuneCookies };
};
const connector = connect(mapStateToProps);

export default connector(Cookies);
