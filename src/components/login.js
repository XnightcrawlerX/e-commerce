import React, {  Component } from 'react';
import { render } from 'react-dom';
import Axios from 'axios';
import Home from '../../src/views/Home'
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginToggled:true,
            email: '',
            password: '',
            checked: false,
        }
        this.closeToggled = this.closeToggled.bind(this)
    }
    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const {email, password} = this.state;
        Axios.post('http://localhost:5000/login',{
                email:email,
                password:password,
            }
        ).then(resp=>{
            if(resp.statusText === 'Success'){
                localStorage.setItem('name', resp.data)
            }
        })
    }
    closeToggled(){
        this.setState({loginToggled: false}, ()=>{
            document.removeEventListener('click', this.closeToggled)
        })
    }
    render(){
        const {email, password} = this.state;
        return(
            <div className="login-toggled">
                Sign in
                <div className="login-container">
                    <label>Email or Phone</label>
                    <input 
                    type="email" 
                    className="login-email" 
                    placeholder="Enter Email" 
                    name="email" 
                    value={email}
                    onChange={this.onChange}
                    />
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="login-password" 
                    placeholder="Enter Password"
                    name='password'
                    value={password}
                    onChange={this.onChange}
                     />
                    <input type="checkbox" className="checkbox" id="ischecked" />
                    <label className="checkbox-label">Remember me</label>
                    <button 
                    type="submit" 
                    className="login-submit"
                    onClick={this.onSubmit}>
                        Submit
                    </button> 
                    <p className="forgot-password">
                        Forgot <a href="/">password?</a>
                    </p>
                </div>
            </div>
        )
    }
}
export default Login;