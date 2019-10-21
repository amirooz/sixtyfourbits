import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../media/img/sixtyfour.png'
export default function Navbar(props) {
    return (
        <div>
            <nav className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo logo blue-text"><img src={Logo} alt="Sixtyfour Bits" /></Link>
                    <ul className="right">
                        <li><NavLink to="/" className="black-text">Home</NavLink></li>
                        <li><NavLink to="/about" className="black-text">About</NavLink></li>
                        <li><NavLink to="/service" className="black-text">Service</NavLink></li>
                        <li><NavLink to="/contact" className="black-text">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
