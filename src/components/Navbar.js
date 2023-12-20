/* eslint-disable react/jsx-no-undef */

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
export default function Navbar(props) {

    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    return (
        <div>
            <nav id='navid' className="navbar navbar-expand-lg position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link style={{ color: "#fff"}}  className=" navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ color: "#fff",fontWeight: "600",opacity:"0.8"}}  className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
                            {(localStorage.getItem("user")) ?
                                <li className="nav-item">
                                    <Link style={{ color: "#fff",fontWeight: "600",opacity:"0.8"}}  className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("user")) ?
                            <form className="d-flex">
                                <Link style={{ color: "#fff",fontWeight: "600"}}  className=" nav-link fs-5 active " to="/login">Login</Link>
                                <Link style={{ color: "#fff",fontWeight: "600"}}  className=" nav-link fs-5 mx-3 active" to="/signup">Signup</Link>
                            </form> :
                            <div>

                                <div id='mybtn2'  className="btn bg-white text-danger mx-2 " onClick={loadCart}>
                                    <div color="secondary" badgeContent={items.length} >
                                 
                                    </div>
                                 
                                    Cart{" "}
                                    <Badge pill bg='danger'>{items.length}</Badge>
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                                <button id='mybtn' onClick={handleLogout} className="btn bg-white text-danger" >Logout</button></div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
