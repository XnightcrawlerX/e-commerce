import React, { Component } from "react";
import {Link} from "react-router-dom";
import Signup from "../views/Signup";
import Login from './login';
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
    signout(){
        localStorage.removeItem('name')
        console.log(localStorage.getItem('name'))
    }


    render (){
        return(
                <div>
                    <i className="fas fa-bars" onClick={this.menuOpen}></i>
                    {
                        this.state.menuOpen
                            ?(
                            <div className="bar-menu">
                                <div className="bar-menu-container-top">
                                    <p className="welcome">
                                        {
                                            localStorage.getItem('name') === null ?
                                             'Welcome': 
                                             'Welcome '+ localStorage.getItem('name')
                                        }
                                    </p>
                                    <Link className="sign-up-and-login" onClick={this.signUpToggled}>Sign Up</Link>
                                    {
                                    localStorage.getItem('name') === null ?
                                    <Link className="sign-up-and-login" onClick={this.signInToggled}>Login</Link> :
                                    <Link className="sign-up-and-login" onClick={this.signout}>Logout</Link>
                                    }
                                </div>
                                    <Link to='/Shop'>
                                        Shop
                                    </Link>
                                    <Link to='/Popular'>
                                        Popular
                                    </Link>
                                    <Link to='/Upcoming'>
                                        Upcoming
                                    </Link>
                                    <Link to='/About'>
                                        About
                                    </Link>
                            </div>
                            )
                            :(
                                null
                            )
                    }
                    {
                        this.state.signUpToggled ?(
                            <div className='main'>
                                <a class="fas fa-times" id='main-signup-container-close' onClick={this.closeToggled}></a>
                                <Signup />
                            </div>
                        )
                        :(
                            null
                        )
                    }
                    {
                        this.state.signInToggled?(
                            <div className='main'>
                                <a class="fas fa-times" id='close-login' onClick={this.closeSignin}></a>
                                <Login />
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