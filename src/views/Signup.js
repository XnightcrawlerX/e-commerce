import React, { Component } from "react";
import Axios from "axios";
class Signup extends Component{
    constructor(){
        super();
        this.state= {
            name: '',
            email: '',
            password: '',
            message: ''
        };
    }
    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const { name, email, password} = this.state;
        Axios.post('http://localhost:5000/signup',{
                name: name,
                email:email,
                password:password,
            }
        ).then(resp=>{
            this.setState({message: resp.data})
        })
    }
    render(){
        const { name, email, password } = this.state;
        return(
        this.state.message === 'Success' ? (null) :(
            <div className='main' id='main-signup-container'>
                <div className="registration-error">{this.state.message}</div>
                <form onSubmit={this.onSubmit} method='post'>
                    <p>First Name:</p>
                    <input
                    name='name'
                    type='text'
                    required
                    value={name}
                    onChange={this.onChange}
                    />
                    <p>Email:</p>
                    <input
                    value={email}
                    onChange={this.onChange}
                    name='email'
                    type='email'
                    required
                    />
                    <p>Password:</p>
                    <input
                    value={password}
                    onChange={this.onChange}
                    name='password'
                    type='password'
                    required
                    />
                    <button>Submit
                    </button>
                </form>
            </div>
        ))
    }
}
export default Signup;