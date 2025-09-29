import React, { useContext } from 'react'
import './Header.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import productsContext from '../../context/ProductsContext';



export default function Header() {
    const contextData = useContext(productsContext)

    return (
        <Navbar expand="lg" className="head">
            <Container>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">منو</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="bag-box position-relative">
                            <NavLink
                                className="head-link fw-1"
                                onClick={() => contextData.setIsShowBagSidebar(true)}>
                                <BsHandbag></BsHandbag>
                            </NavLink>
                            <p className='bag-badg'>{contextData.userBag.length}</p>
                        </div>
                        <Nav className="m-auto">
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/shop">Shop</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/">About</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/">Contact</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/">Login</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Brand href="#home">
                    <img src="shopLogo.jpg" alt="shopLogo" className='shopLogo' />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
