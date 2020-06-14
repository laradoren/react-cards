import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  let message = localStorage.getItem('message');
  return (
    <header className={s.header}>
        <div className= {s.title}>Kanban Board </div>
        <div className={s.auth}>
            {message ? message:  <> <NavLink to = '/' className={s.log}>Log In</NavLink> <NavLink to = '/signin' className={s.sign}>Sign In</NavLink> </>}           
        </div>         
    </header>
  );
}

export default Header;