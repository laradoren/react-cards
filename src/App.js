import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Board from './components/Board/Board';
import { Route, Switch } from 'react-router-dom';
import SigninContainer from './components/Auth/SigninContainer';
import LoginContainer from './components/Auth/LoginContainer';

const App = () => {
  return (
      <div className="App">
          <Header />
          <div className="appContent">
            <Switch>
              <Route exact path = '/board' render={() => <Board  /> }  />
              <Route exact path = '/' component={LoginContainer} />
              <Route exact path = '/signin' component={SigninContainer } />
            </Switch>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
