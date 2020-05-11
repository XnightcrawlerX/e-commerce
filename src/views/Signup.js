import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) =>{
    console.log(response)
}
class Signup extends Component{
    render(){
        return(
                    <GoogleLogin
                        clientId=""
                        buttonText="Signup"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
        )
    }
}
export default Signup;