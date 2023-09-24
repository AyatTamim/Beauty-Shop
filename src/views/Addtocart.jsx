import React, { useEffect, useState } from 'react'
import SiteNav from '../layout/SiteNav'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

export default function Addtocart() {
    let param = useParams();
    let [product, setProduct] = useState({});

    let getProduct = () => {
        fetch(`http://localhost:2222/products/${param.productId}`)
            .then((json) => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => { 
        getProduct();
    }, [])
    return (
        <>
            <SiteNav />
            <div>Addtocart</div>
            <Footer />
        </>

    )
}
