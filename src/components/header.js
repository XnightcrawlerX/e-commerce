import React, { Component } from "react";
import Toggle from "../components/menuNav";
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
                <div className="header">
                    < Toggle />
                    <Link to='/'>
                        <a className="logo">logo</a>
                    </Link>
                    <div className="header-container-right">
                        <Link>
                            <a class="fas fa-user"></a>
                        </Link>
                        <Link>
                            <a class="fas fa-shopping-cart"></a>
                        </Link>
                    </div>
                </div>
        )
    }
}
export default Header;