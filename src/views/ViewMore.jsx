import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import SiteNav from '../layout/SiteNav'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Footer from './Footer';
import BackTotop from './BackTotop';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function ViewMore() {
    const { t } = useTranslation();
    document.body.dir = i18n.dir();
    let changeLAnguage = () => {
        i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
        localStorage.setItem("language", i18n.language)
    }
    const params = useParams();

    let [product, setProduct] = useState({});

    function getSingleProduct() {
        fetch("http://localhost:2222/products/" + params.productId)
            .then(json => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("language"))
        getSingleProduct()
    }, [])

    // const descriptionDetails = `${product.description}`;
    return (
        <>
            <SiteNav />
            <div className='text-center d-flex viewMore'>
                <Card className=" p-5">
                    <Card.Body className=''>
                        <Image variant="top" src={product.image_link} alt={product.title} width="" className='' />
                        <Card.Title className='text-capitalize pt-2'>{product.brand}</Card.Title>
                        <Card.Title className='pt-3'>{product.name}</Card.Title>
                        <Card.Title className='pt-3'>{product.price}{product.price_sign}</Card.Title>
                        <Card.Title className='pt-3' >{product.description}</Card.Title>
                    </Card.Body>
                </Card >
            </div>
            <Footer />
            <BackTotop />
        </>
    )
}
