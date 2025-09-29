import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './Toast.css'
import productsContext from '../../context/ProductsContext';

function DismissibleExample() {
    const contextData = useContext(productsContext)

    return (
        <Toast
            className="toast-box"
            show={contextData.isShowToast}
            autohide                             // 👈 فعال شدن بستن خودکار
            delay={3000}                         // 👈 بعد از 3 ثانیه
            style={{ background: contextData.colorToast, color: "#fff" }}
        >
            <Toast.Body>{contextData.messageToast}</Toast.Body>
        </Toast>
    )
}

export default DismissibleExample;