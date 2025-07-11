import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice';

function ProductView() {
    const products=useSelector((state)=>state.product)
    const dispatch=useDispatch();
    //we use useEffect to run side effect code in react , to dispatch action
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    return (
        <div>
        <h2>List of Product Titles</h2>
        {
            products.loading && <h2>Loading....</h2>   
        }
        {
            !products.loading && products.error && <h2>Error {products.error}</h2>
        }
        {
            products.products.map((prod,i)=><p key={i}>{prod}</p>)
        }
        </div>
    )
}

export default ProductView
