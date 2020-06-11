import React from 'react';
import s from './Auth.module.css';

const Signin = () => {
    return (
        <div className={s.authBlock}>
            <div className={s.authWindow}>
                <div className={s.title}>Please Sign In</div>
                <form action="" className = {s.form}>
                    <label htmlFor="">Login</label>
                    <input type="text" className={s.login}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className="password"/>
                    <input type="button" value="Sign In" className={s.button}/>
                </form>
            </div>
        </div>
    );
}

export default Signin;