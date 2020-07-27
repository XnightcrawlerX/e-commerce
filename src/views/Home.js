import React, { Component } from "react";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiResponse: ""
        }
    }
    render(){
        return (
            <div className="main">
                <div className="main-image-1">
                    <div className="main-content-container">
                        <p className="header">Wood designs</p>
                        <a className="header-button-a" href="#">Premade</a>
                        <a className="header-button-b" href="/login">Custom</a>
                    </div>
                </div>
                <div className="image-container-bottom">
                    <div className="bottom-container-image1">
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;