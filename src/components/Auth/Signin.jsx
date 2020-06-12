import React, { Component } from 'react';
import s from './Auth.module.css';
import { authAPI } from '../../api/api';

class Signin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: null,
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
        const formDate = new FormData();
        const {history} = this.props;
        console.log(this.props);
        formDate.append('username',this.state.username);
        formDate.append('password',this.state.password);
        authAPI.signin(formDate)
        .then(response => {
            history.push('/');
        })
    }

    render() {
        return (
            <div className={s.authBlock}>
                <div className={s.authWindow}>
                    <div className={s.title}>Please Sign In</div>
                    <form onSubmit={this.handleCreateNewCard} className = {s.form}>
                        <label >Username</label>
                        <input name = "username" type="text" className={s.login} onChange={this.handleFieldChange} />
                        <label >Password</label>
                        <input name = "password" type="password" className="password" onChange={this.handleFieldChange} />
                        <button className={s.button}>  Sign In </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;