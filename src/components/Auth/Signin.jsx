import React from 'react';
import s from './Auth.module.css';
import axios from 'axios';

const Signin = (props) => {
    const handleFieldChange = (event) =>  {
        props.setFields(event.target.name,  event.target.value);
    };

    const handleSignin =  (event) => {
        event.preventDefault();
        const formDate = new FormData();
        formDate.append('username', props.username);
        formDate.append('password', props.password);
        props.signin(formDate);
    };

    
    return (
        <div className={s.authBlock}>
            <div className={s.authWindow}>
                <div className={s.title}>Please Sign In</div>
                <form onSubmit={handleSignin} className = {s.form}>
                    <label >Username</label>
                    <input name = "username" type="text" className={s.login} onChange={handleFieldChange} />
                    <label >Password</label>
                    <input name = "password" type="password" className="password" onChange={handleFieldChange} />
                    <button className={s.button}>  Sign In </button>
                </form>
            </div>
        </div>
    );
    
}

export default Signin;