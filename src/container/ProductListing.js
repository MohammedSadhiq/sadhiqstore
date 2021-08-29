import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts  } from '../redux/actions/productAction';

const ProductListing = ()=>{

    const products = useSelector((state)=>state.allProducts.products)
    const {id,title} = products;
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log('err',err)
        });
        console.log('response',response.data)
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    
   // console.log('products',products)
    return(<div className='ui grid container'>
        <ProductComponent />
    </div>)
}

export default ProductListing