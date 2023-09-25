import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ShowCategoriesDetails() {
    const params = useParams()
    let [selectedCat, setSelectedCat] = useState([])

    let getCatDetails = () => {
        fetch("http://localhost:2222/products")
            .then(json => json.json())
            .then(res => setSelectedCat(res.filter(product => product.category === params.cat)))
            .then(setSelectedCat)
    }

    useEffect(() => {
        getCatDetails()
    }, [])
    return (
        <div className='text-center'>
            {selectedCat}
        </div>
    )
}
