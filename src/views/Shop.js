import React, { Component } from 'react';


class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: [
                'https://images.unsplash.com/photo-1536784058511-2fac13abf62a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                'https://images.unsplash.com/photo-1532979063614-e6feead69941?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                'https://images.unsplash.com/photo-1591038120811-e21ea3a644e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
                'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                'https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                'https://images.unsplash.com/photo-1520933793020-26d32feb5351?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        ],
            title: ['test image 1', 'test image 2', 'test image 3', 'test image 4', 'test image 5', 'test image 6'],
            price: [5,8,4,9,56,3]
        }
    }
    render(){
        return(
            <div className="main">
                <div className="scrolling-images">
                    <a class="fas fa-angle-right"></a>
                    <a class="fas fa-angle-left"></a>
                </div>
                <div className="filter-container">
                    filter
                </div>
                <a className="image-gallery" href='/'>
                   {this.state.image.map((url, index)=>(
                       <div className='product-container' style={{backgroundImage: "url("+ url + "}"}}>
                           <div className='product-name'>
                               {this.state.title[index]}
                           </div>
                           <div className='product-price'>
                               ${this.state.price[index]}
                           </div>
                       </div>
                   ))}
                </a>
            </div>
        )
    }
}
export default Shop;