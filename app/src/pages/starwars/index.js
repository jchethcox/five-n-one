import React from "react";
// import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";

const li = name => {
  return (
    <li key={name.id} style={{ name: name.name }}>
      {name.name}
    </li>
  );
};

const Names = props => {
  return (
    <div>
      <h1>Star Wars Names</h1>
      <ul>{map(li, props.names)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { names: state.starwars };
};

const connector = connect(mapStateToProps);

export default connector(Names);
