import React, { Component } from 'react';
import Login from './Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login, setFields} from './../../redux/auth-reducer';

class LoginContainer extends Component {
  render() {
    return (
      <Login login = {this.props.login}  setFields = {this.props.setFields} username = {this.props.username} email = {this.props.email} password = {this.props.password}
       />
    );
  }
}

let mapStateToProps = (state) => ({
    username: state.authPage.username,
    email: state.authPage.email,
    password: state.authPage.password,
});
  
export default compose(
  connect(mapStateToProps, {login, setFields}),
  withRouter
)(LoginContainer);