import React, { Component } from "react";

class Home extends Component {
    render(){
        return (
            <div className="main">
                <div className="main-image-1">
                    <div className="main-content-container">
                        <h4 className="header">Header</h4>
                        <a className="header-button-a">Shop Women</a>
                        <a className="header-button-b">Shop Men</a>
                    </div>
                </div>
                <div className="image-container-bottom">
                    <div className="bottom-container-image1">
                        Image
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;