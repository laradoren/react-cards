import React, { Component } from 'react';
import s from './Auth.module.css';
import { authAPI } from '../../api/api';


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewCard = this.handleCreateNewCard.bind(this);
    }

    handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleCreateNewCard (event) {
        event.preventDefault();
        const { history } = this.props;
        const formDate = new FormData();
        formDate.append('username',this.state.username);
        formDate.append('email', this.state.email);
        formDate.append('password',this.state.password);
        authAPI.login(formDate)
        .then(response => {
            history.push('/signin');
        })
    }
    render() {
        return (
            <div className={s.authBlock}>
                <div className={s.authWindow}>
                    <div className={s.title}>Please Log In</div>
                    <form onSubmit={this.handleCreateNewCard} className = {s.form}>
                        <label htmlFor="">Username</label>
                        <input name="username" type="text" className={s.login} onChange={this.handleFieldChange} />
                        <label htmlFor="">Email</label>
                        <input name="email" type="email" className={s.email} onChange={this.handleFieldChange} />
                        <label htmlFor="">Password</label>
                        <input name="password" type="password" className="password" onChange={this.handleFieldChange} />
                        <button className={s.button}  > Log In </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;