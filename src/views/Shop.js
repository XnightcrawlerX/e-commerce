import React, { Component } from 'react';


class Shop extends Component{
    render(){
        return(
            <div className="shop-container">
                <div className="scrolling-images">
                    <a class="fas fa-angle-right"></a>
                    <a class="fas fa-angle-left"></a>
                </div>
                <div className="filter-container">
                    filter
                </div>
                <div className="image-gallery">
                    images
                </div>
            </div>
        )
    }
}
export default Shop;