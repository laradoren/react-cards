import React from 'react';
import s from './Auth.module.css';

const Login = () => {
    return (
        <div className={s.authBlock}>
            <div className={s.authWindow}>
                <div className={s.title}>Please Log In</div>
                <form action="" className = {s.form}>
                    <label htmlFor="">Login</label>
                    <input type="text" className={s.login}/>
                    <label htmlFor="">Email</label>
                    <input type="email" className={s.email}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className="password"/>
                    <input type="button" value="Log In" className={s.button}/>
                </form>
            </div>
        </div>
    );
}

export default Login;