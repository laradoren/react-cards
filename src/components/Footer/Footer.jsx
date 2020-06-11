import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className= {s.title}>Created by Alina Halushko </div>
        <a href = 'mailto:alinahalushko2@gmail.com' className={s.email}>alinahalushko2@gmail.com</a>
    </footer>
  );
}

export default Footer;