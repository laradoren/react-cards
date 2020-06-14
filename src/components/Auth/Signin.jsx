import React from 'react';
import s from './Auth.module.css';
import { useHistory } from 'react-router-dom';

const Signin = (props) => {
    const history = useHistory();
    const handleFieldChange = (event) =>  {
        props.setFields(event.target.name,  event.target.value);
    };

    const handleSignin =  (event) => {
        event.preventDefault();
        const formDate = new FormData();
        formDate.append('username', props.username);
        formDate.append('password', props.password);
        props.signin(formDate);
        history.push('/board');
    };
    
    return (
        <div className={s.authBlock}>
            <div className={s.authWindow}>
                <div className={s.title}>Пожалуйста, авторизируйтесь</div>
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