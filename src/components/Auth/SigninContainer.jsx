import React, { Component } from 'react';
import Signin from './Signin';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {signin, setFields} from './../../redux/auth-reducer';

class SigninContainer extends Component {
    render() {
        return (
           <Signin token = {this.props.token} signin = {this.props.signin}  setFields = {this.props.setFields} username = {this.props.username} password = {this.props.password}  />
        );
    }
}

let mapStateToProps = (state) => ({
    username: state.authPage.username,
    password: state.authPage.password,
    token: state.authPage.token

  });
  
  export default compose(
    connect(mapStateToProps, {signin, setFields}),
    withRouter
  )(SigninContainer);