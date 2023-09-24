import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ViewMore from './ViewMore';

export default function ProductDetails({ product }) {
    const params = useParams();

    return (
        <>
            <Card className='text-center ' >

                <Card.Body className='text-center d-flex flex-column justify-content-center cardStyle'>
                    <Image variant="top" src={product.image_link} alt={product.title} width={300} className='mx-auto pb-3 ' />

                    <div className='card-img-overlay d-flex flex-column justify-content-center'>
                        <ul class=" list-unstyled">
                            <li>
                                <Link to="/wishlist"><FontAwesomeIcon className='iconFont text-white btn btn-success mt-2' icon={faHeart} /></Link>
                            </li>
                            <li>
                                <Link to="/cart"><FontAwesomeIcon className='iconFont text-white btn btn-success mt-2' icon={faCartPlus} /></Link>
                            </li>
                        </ul>
                    </div>
                    <Card.Title className='text-capitalize'>{product.brand}</Card.Title>
                    <h5>{product.name}</h5>
                    <div className='row row-col-3 m-3 gap-3 justify-content-center '>
                        {
                            product.product_colors.map((color, index) =>
                                <div key={index} sm={2} md={6} lg={4} style={{
                                    backgroundColor: color.hex_value,
                                    borderRadius: "50%",
                                    width: "70px",
                                    height: "70px",

                                }} ></div>

                            )
                        }
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <Link to={`./${product.id}`} className='btn Details '>
                            View More
                        </Link>
                        <Link to={`./add/${product.id}`} className='btn Details '>
                            Add to cart
                        </Link>
                    </div>
                </Card.Body>

            </Card >

        </>

    )
}
