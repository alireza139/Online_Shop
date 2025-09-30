import React, { useContext, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { MdDelete } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import './Sidebar.css'
import productsContext from '../../context/ProductsContext'
import { Button } from 'react-bootstrap';

export default function Sidebar() {
    const contextData = useContext(productsContext)
    const increaseCount = (id) => {
        contextData.setUserBag(prev =>
            prev.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        )
    }
    const decreaseCount = (id) => {
        contextData.setUserBag(prev =>
            prev.map(item =>
                item.id === id && item.count > 1
                    ? { ...item, count: item.count - 1 }
                    : item
            )
        );
    }
    const deleteProduct = (id) => {
        let newUserBag = contextData.userBag.filter(product => {
            return product.id != id
        })

        contextData.setUserBag(newUserBag)
    }

    return (
        <>
            {/* Backdrop */}
            {
                contextData.isShowBagSidebar && (
                    <div
                        className="backdrop"
                        onClick={() => contextData.setIsShowBagSidebar(false)}
                    ></div>
                )
            }

            <aside className={`bag-sidebar ${contextData.isShowBagSidebar ? "active" : ""}`}>
                <h3 className='d-flex justify-content-between mt-3 mx-3 bag-title'>
                    <span className='d-flex align-item-center'>
                        <BsBag></BsBag>
                        Bag
                    </span>
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => contextData.setIsShowBagSidebar(false)}>
                        <AiOutlineClose></AiOutlineClose>
                    </span>
                </h3>

                {contextData.userBag.length != 0 ? (
                    <div>
                        <table class="table bag-table center">
                            <thead>
                                <tr>
                                    <th scope="col">product</th>
                                    <th scope="col">name</th>
                                    <th scope="col">count</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Del</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contextData.userBag.map(product => (
                                        <tr className='bag-img'>
                                            <td>
                                                <img className='bag-table' src={product.img} alt="" />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>
                                                <IoIosArrowUp
                                                    className='arrow-counter'
                                                    onClick={() => increaseCount(product.id)}>
                                                </IoIosArrowUp>
                                                <span className='number-counter'>{product.count}</span>
                                                <IoIosArrowDown
                                                    className='arrow-counter'
                                                    onClick={() => decreaseCount(product.id)}>
                                                </IoIosArrowDown>
                                            </td>
                                            <td>{product.price * product.count}$</td>
                                            <td>
                                                <MdDelete
                                                    className='fs-5'
                                                    onClick={() => deleteProduct(product.id)}></MdDelete>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="payBox d-flex justify-content-between mx-3">
                            <p>All price:
                                <span className='fs-4 fw-bold'>
                                    {contextData.allPrice}$
                                </span>
                            </p>
                            <Button style={{
                                height: "2.5rem"
                            }}>Pay</Button>
                        </div>
                    </div>
                ) :
                    (
                        <p style={{
                            textAlign: "center",
                            marginTop: "50%",
                            fontSize: "2rem"
                        }}>bag is mpt</p>
                    )

                }
            </aside>
        </>
    )
}
