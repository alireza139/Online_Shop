import React, { useState } from 'react'
import productList from '../../productsDATA'
import { useParams , Navigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import './SingleProduct.css'


export default function SingleProduct(props) {
    let [allProducts] = useState(productList)
    let params = useParams()
    let hasProduct = allProducts.some(product => product.id == params.productID)
    let chosenProduct = allProducts.find(product => product.id == params.productID)
    let productDetails = `Some quick example text to build on the card title and make up thebulk of the card's content.
                          Some quick example text to build on the card title and make up thebulk of the card's content.
                          Some quick example text to build on the card title and make up thebulk of the card's content.`

    return (
        hasProduct ? (
            <div className='single-page w-100 d-flex justify-content-evenly align-items-center'>
                <div className='single-page-info'>
                    <h4 className='mb-3'>
                        <span className='fw-bold'>Product name:</span>
                        {` ${chosenProduct.name}`}
                    </h4>
                    <p>
                        <span className='fw-bold'>product ID:</span>
                        {` 00${chosenProduct.id}`}
                    </p>
                    <p>
                        <span className='fw-bold'>Price:</span>
                        {` ${chosenProduct.price}$`}
                    </p>
                    <p>
                        <span className='fw-bold'>Details:</span>
                        <br />
                        {productDetails}
                    </p>
                </div>
                <Image src={`/${chosenProduct.img}`} className='single-page-img m-0 p-0' />
            </div>
        ) : (
            <Navigate to="/ERROR404"></Navigate>
        )
    )
}
