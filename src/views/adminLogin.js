
import React, { Component } from "react";
const axios = require('axios');
const adminStyle = {
    border: "thin solid black",
    width: "80vw",
    height: "50vh",
    'margin-left': "10vw",
    'margin-top': "20vh"
}
class AdminPage extends Component{
    constructor(){
        super();
        this.state = {
            message: '',
            isAuthenticated: '',
            username: '',
            password: '',
        };
    }
    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });    }
    onSubmit = (e)=>{
        e.preventDefault();
        const { username, password } = this.state;
        axios.post('http://127.0.0.1:5000/secret',{
            headers:{
                "Content-Type": "application/json"
            },
                username: username,
                password: password
        }).then(resp => {
            console.log(resp)
            if(resp.data === "Success"){
                this.setState({isAuthenticated: resp.data})
                this.setState({message: resp.statusText})
            }else{
                this.setState({isAuthenticated: resp.data})
                this.setState({message: resp.statusText})
            }
        })
    }
    render(){
        const {username, password, isAuthenticated, message } = this.state;
        return(
            this.state.isAuthenticated === 'Fail' || this.state.isAuthenticated === '' ?(
                <div className="main">
                    <div className="admin-container" style={adminStyle}>
                        <form onSubmit={this.onSubmit} action="http://127.0.0.1:5000/secret" method="POST">
                            <p>{this.state.message}
                            </p>
                            <input 
                                required
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                            />
                            <input
                                required
                                type="text"
                                name="password"
                                value={password} 
                                onChange={this.onChange}
                            />
                            <input type="submit" value="Submit"/>
                        </form>

                    </div>
                </div>
                ): <div className="main" id='admin'>
                    <p>admin panel</p>
                    <div className='admin-product-container'>
                        <a className='admin-product-container-add-content' id="add-product" href="/admin/addProduct">add</a>
                        <a className='admin-product-container-add-content' id="remove-product">remove</a>
                        <a className='admin-product-container-add-content' id="change-product">change</a>
                    </div>
                </div>
        )
    }
};
export default AdminPage;