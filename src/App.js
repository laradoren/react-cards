import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Board from './components/Board/Board';
import {  Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signin from './components/Auth/Signin';

const App = (props) => {
  return (
      <div className="App">
          <Header />
          <div className="appContent">
            <Switch>
              <Route exact path = '/' render= {() => <Board /> }/>
              <Route exact path = '/login' component={Login} />
              <Route exact path = '/signin' component={Signin} />
            </Switch>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
