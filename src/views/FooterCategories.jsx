
// import SiteNav from '../layout/SiteNav'
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// export default function FooterCategories() {
//     const params = useParams();

//     let [singlecategory, setSinglecategory] = useState({});

//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);


//     let baseUrl = "http://localhost:2222/products";
//     let getProducts = () => {
//         fetch(baseUrl).then((res) => res.json().then((data) => setProducts(data)))
//     }

//     let getCategories = () => {
//         fetch("http://localhost:2222/categories/").then(res => res.json().then((data) => setCategories(data)))
//     }


//     function getSingleCategory() {
//         fetch("http://localhost:2222/categories/" + params.productCategory)
//             .then(json => json.json())
//             .then(res => setSinglecategory(res))
//     }

//     let productFilter = (category) => {
//         let filterProducts = [],
//           allProducts = [],
//           productCategory = category;
//         fetch("http://localhost:2222/products")
//           .then(json => json.json())
//           .then(res => allProducts = res)
//           .then(() => filterProducts = allProducts.filter((product) => product.category
//             === productCategory))
//           .then(() => setProducts(filterProducts))
//       }

//     useEffect(() => {
//         getSingleCategory();
//         getProducts();
//         getCategories();
//     }, [])

//     return (
//         <>
//                 {
//                     categories.map((category, index) =>
//                         category && <div  key={index} className='text-capitalize' onClick={() => productFilter(category)}>{category.split("_").join(" ")}
//                         {console.log(products)}
//                         </div>
//                     )}

//         </>
//     )
// }

import React from 'react'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function FooterCategories() {


    const [products, setProducts] = useState([]);
    const [singlecategories, setsingleCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    let baseUrl = "http://localhost:2222/products";
    let getProducts = () => {
        fetch(baseUrl).then((res) => res.json().then((data) => setProducts(data)))
    }



    let getCategories = () => {
        fetch("http://localhost:2222/categories/").then(res => res.json().then((data) => setCategories(data)))
    }
    let productFilter = (category) => {
        let filterProducts = [],
            allProducts = [],
            productCategory = category;
        fetch("http://localhost:2222/products")
            .then(json => json.json())
            .then(res => allProducts = res)
            .then(() => filterProducts = allProducts.filter((product) => product.category
                === productCategory))
            .then(() => setProducts(filterProducts))
    }


    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    return (
        <>
            {
                categories.map((category, index) =>
                    category && <Link to={`/products/${category}`} key={index} className=' text-capitalize' onClick={() => productFilter(category)}>{category.split("_").join(" ")}
                    </Link>
                )}
            {/* {console.log(categories)} */}
        </>
    )
}

