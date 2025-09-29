import React, { useContext } from 'react'
import './ProductCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import productsContext from '../../context/ProductsContext'

export default function ProdCard(props) {
    const contextData = useContext(productsContext)

    const showToastAndAddToBag = (id) => {
        let isExist = contextData.userBag.some(product => product.id == id)

        if (isExist) {
            contextData.setIsShowToast(true)
            contextData.setMessageToast("Product is exist in bag")
            contextData.setColorToast("red")
        }
        else{
            let productObject = { ...props, count: 1 }
            contextData.setUserBag(prev => [...prev, productObject])
            contextData.setIsShowToast(true)
            contextData.setMessageToast("Product add to bag")
            contextData.setColorToast("green")
        }
        setTimeout(() => {
            contextData.setIsShowToast(false)
        }, 3000);
    }

    return (
        <Card className='mx-2'>
            <Card.Img variant="top" src={props.img} style={{ height: "18rem" }} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='card-btn-box'>
                        <Link to={`/shop/${props.id}`} className='card-btn card-btn-details'>Details</Link>
                        <AiOutlineShoppingCart
                            className='card-btn-icon fs-5'
                            onClick={() => showToastAndAddToBag(props.id)}></AiOutlineShoppingCart>
                    </div>
                    <p className='mb-0'>{props.price}$</p>
                </div>
            </Card.Body>
        </Card>
    )
}
