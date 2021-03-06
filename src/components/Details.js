import React, { Component } from 'react';

import {ProductConsumer} from '../context';

import {Link} from 'react-router-dom';

import {ButtonModel} from './button';
 
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company,img,info,price,title,inCart} = 
                    value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className=".col-10.mx-auto.text-center.text-slanted text-black my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-4 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-black">
                                        price: <span>$</span>
                                        {price}
                                    </h4>
                                    <p className="p.text-capitalize.font-weight-bold mt-3 mb-0">
                                        <h4>some info about product:</h4>
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonModel>
                                                back to products
                                            </ButtonModel>
                                        </Link>
                                        <ButtonModel
                                         cart
                                         disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id)
                                            value.openModel(id);
                                        }}>
                                            {inCart?"inCart" : "add to cart"}
                                        </ButtonModel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;