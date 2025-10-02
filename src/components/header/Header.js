import React, { useContext } from 'react'
import './Header.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";



import productsContext from '../../context/ProductsContext';



export default function Header() {
    const contextData = useContext(productsContext)

    return (
        <header>
            <Navbar expand="lg" className="head">
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Brand href="#home" className='shopLogo d-lg-none me-3'>
                    <span className='my-brand fs-2'>Nareng</span>
                    <span className='stor-brand'>Store</span>
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Meno</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="m-auto">
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/shop">Shop</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/contact">Contact</NavLink>
                            <NavLink className={({ isActive }) => `head-link me-5 ${isActive ? 'active-btn' : ""}`} to="/hamkari">hamkari</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Navbar.Brand href="#home" className='shopLogo d-none d-lg-flex fw-bold me-2'>
                    <span className='my-brand fs-3'>Nareng</span>
                    <span className='stor-brand'>Store</span>
                </Navbar.Brand>
            </Navbar>

            <div className="bottom-header py-1">
                <div className="header-icons-box ps-3">
                    <div className="icon-box position-relative">
                        <NavLink
                            className="head-link fw-1"
                            onClick={() => contextData.setIsShowBagSidebar(true)}>
                            <BsHandbag className='header-icon'></BsHandbag>
                        </NavLink>
                        <p className='bag-badg'>{contextData.userBag.length}</p>
                    </div>
                    <div className="icon-box user-icon">
                        <FaRegUser className='header-icon'></FaRegUser>
                    </div>
                    <div className="icon-box search-icon">
                        <BsSearch className='header-icon mt-1'></BsSearch>
                    </div>
                    <div className="icon-box position-relative">
                        <NavLink
                            className="head-link">
                            <FcLike className='header-icon'></FcLike>
                        </NavLink>
                        <p className='like-badg'>{contextData.userBag.length}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
