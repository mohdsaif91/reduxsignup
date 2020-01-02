import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const HOme = props => {
  const getdata = props.posts.length ? (
    props.posts.map(m => {
      return (
        <div className="post card" key={m.id}>
          <div className="card-content">
            <span className="card-title">{m.title}</span>
            <p>{m.name}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="Center">NO Post Yet</div>
  );
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {getdata}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.signup
  };
};

export default connect(mapStateToProps)(HOme);
