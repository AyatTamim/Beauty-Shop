import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import ViewMore from './ViewMore';




export default function ProductDetails({ product }) {
    const params = useParams();

    return (
        <Card className='text-center ' >

            <Card.Body className='text-center d-flex flex-column justify-content-center'>
                <Image variant="top" src={product.image_link} alt={product.title} width={300} className='mx-auto pb-3 ' />
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

                            }} >
                                {/* <div className=''>{color.colour_name}</div> */}

                            </div>

                        )
                    }
                </div>
                <Link to={`./${product.id}`} className='btn Details'>
                    View More
                </Link>
            </Card.Body>
        </Card >

    )
}
