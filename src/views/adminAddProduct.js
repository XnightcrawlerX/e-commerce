import React, { Component } from 'react';
import axios from 'axios';
class adminAddProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            image: null,
            discription: '',
            price: ''
        }
    }
    // handlePicUpload = event=>{
    //     this.setState({image: event.target.title})
    // }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onsubmit = (e)=>{
        e.preventDefault();
        const data = new FormData()
        data.append('file', this.state.image)
        data.append('data', this.state.name)
        data.append('data', this.state.discription)
        data.append('data', this.state.price)
        axios.post('http://localhost:5000/admin/addProduct',data).then(resp=>{
            console.log(resp)
        })
    }
    render(){
        return(
            <div className='main'>
                <h2>add product</h2>
                <div className='admin-add-product-container'>
                    <form action='/admin/addProduct' method='post' enctype="multipart/form-data">
                        <input
                            required
                            name='name'
                            type='text'
                            placeholder='Product name'
                            value={this.state.name}
                            onChange={e=> this.handleChange(e)}
                        />
                        <input
                            required
                            type='file'
                            id='img'
                            accept='image/*'
                            name='image'
                            onChange={this.handleChange}
                        />
                        <textarea
                            required
                            type='text'
                            id='discription'
                            name='discription'
                            className='discription'
                            value={this.state.discription}
                            onChange={e=> this.handleChange(e)}
                        />
                        <input
                            required
                            name='price'
                            id='price'
                            type='number'
                            min='1.00'
                            step='1.00'
                            value={this.state.price}
                            onChange={e=> this.handleChange(e)}
                        />
                        <input
                            id='button'
                            type='button'
                            value='Submit'
                            onClick={(e)=> this.onsubmit(e)}
                        />
                    </form>
                </div>
            </div>
        )
    }
}
export default adminAddProduct