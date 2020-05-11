import React, { Component } from "react";
import {Link} from "react-router-dom";
import Signup from "../views/Signup";
class Toggle extends Component{
    constructor(){
        super();
        this.state = {
            menuOpen: false,
            signUpToggled: false,
            signInToggled: false,
        }
        this.menuOpen = this.menuOpen.bind(this);
        this.close = this.close.bind(this);
        this.signUpToggled = this.signUpToggled.bind(this);
        this.closeToggled = this.closeToggled.bind(this);
        this.signInToggled = this.signInToggled.bind(this);
        this.closeSignin = this.closeSignin.bind(this);
    }

    menuOpen(event){
        event.preventDefault();

        this.setState({ menuOpen: true }, ()=>{
            document.addEventListener('click', this.close);
        });
    }
    close(){
        this.setState({menuOpen: false}, ()=>{
            document.removeEventListener('click', this.close);
        });
    }
    signUpToggled(event){
        event.preventDefault();
        this.setState({signUpToggled: true})
    }
    closeToggled(){
        this.setState({signUpToggled: false}, ()=>{
            document.removeEventListener('click', this.closeToggled)
        })
    }
    signInToggled(event){
        event.preventDefault();
        this.setState({signInToggled: true})
    }
    closeSignin(){
        this.setState({signInToggled: false}, ()=>{
            document.removeEventListener('click', this.closeSignin)
        })
    }


    render (){
        return(
                <div>
                    <i class="fas fa-bars" onClick={this.menuOpen}></i>
                    {
                        this.state.menuOpen
                            ?(
                            <div className="bar-menu">
                                <div className="bar-menu-container-top">
                                    <profileName>
                                        Welcome!
                                    </profileName>
                                    <a href="#" onClick={this.signUpToggled}>Sign Up</a>
                                    <a href="#" onClick={this.signInToggled}>Login</a>
                                </div>
                                    <Link to='/shop'>
                                        <a>Shop</a>
                                    </Link>
                                    <Link to='/popular'>
                                        <a>Popular</a>
                                    </Link>
                                    <Link to='/upcoming'>
                                        <a>Upcoming</a>
                                    </Link>
                                    <Link to='/about'>
                                        <a>About</a>
                                    </Link>
                                </div>
                            )
                            :(
                                null
                            )
                    }
                    {
                        this.state.signUpToggled ?(
                            <div className='signup-toggled'>
                                <a onClick={this.closeToggled} class="fas fa-times"></a>
                                <h3>Register for free at Pale</h3>
                                <div className="signup-text">creating a free account gives you access to products, updates, features, future releases and more!</div>
                                <div className="signup-container">
                                    <div className="signup-text">
                                        Sign Up
                                    </div>

                                    <div className="sign-in">Have an account?<a>sign in</a></div>
                                    <p>or sign up with</p>
                                    <Signup />
                                </div>
                            </div>
                        )
                        :(
                            null
                        )
                    }
                    {
                        this.state.signInToggled?(
                            <div className="login-toggled">
                                Sign in
                                <a onClick={this.closeSignin} class="fas fa-times"></a>
                                <div className="login-container">
                                    <label>Email or Phone</label>
                                    <input type="email" className="login-email" placeholder="Enter Email" />
                                    <label>Password</label>
                                    <input type="password" className="login-password" placeholder="Enter Password" />
                                    <input type="checkbox" className="checkbox" id="ischecked" />
                                    <label className="checkbox-label">Remember me</label>
                                    <button type="submit" className="login-submit">Submit</button>
                                    <p className="forgot-password">
                                        Forgot <a href="/">password?</a>
                                    </p>
                                </div>
                            </div>
                        )
                        :(
                            null
                        )
                    }
                </div>
        )
    }
}
export default Toggle;