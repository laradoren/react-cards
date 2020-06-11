import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
        <NavLink to='/' className= {s.title}>Kanban Board </NavLink>
        <div className={s.auth}>
            <NavLink to = '/login' className={s.log}>Log In</NavLink>
            <NavLink to = '/signin' className={s.sign}>Sign In</NavLink>
        </div>         
    </header>
  );
}

export default Header;