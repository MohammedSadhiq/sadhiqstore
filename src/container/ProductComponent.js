import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import {setProducts} from '../redux/actions/productAction';
import {Link} from 'react-router-dom';

const ProductComponent = ()=>{
    
    const products = useSelector((state)=>state.allProducts.products)
    const renderList = products.map((product)=>{
        const {id,title,image,price,category} = product;
        return(
            <div className="four wide column " key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
    )
    });

    return <>{renderList}</>
    
}

export default ProductComponent