import React from 'react';
import s from './Auth.module.css';


const Login = (props) => {
    const handleFieldChange = (event) =>  {
        props.setFields(event.target.name,  event.target.value);
    };

    const handleLogin =  (event) => {
        event.preventDefault();
        const formDate = new FormData();
        formDate.append('username', props.username);
        formDate.append('email', props.email);
        formDate.append('password', props.password);
        props.login(formDate);
    };

    return (
        <div className={s.authBlock}>
            <div className={s.authWindow}>
                <div className={s.title}>Please Log In</div>
                <form onSubmit={handleLogin} className = {s.form}>
                    <label htmlFor="">Username</label>
                    <input name="username" type="text" className={s.login} onChange={handleFieldChange} />
                    <label htmlFor="">Email</label>
                    <input name="email" type="email" className={s.email} onChange={handleFieldChange} />
                    <label htmlFor="">Password</label>
                    <input name="password" type="password" className="password" onChange={handleFieldChange} />
                    <button className={s.button}  > Log In </button>
                </form>
            </div>
        </div>
    );
}

export default Login;