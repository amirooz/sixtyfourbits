import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../media/img/sixtyfour.png'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Icon } from './Icon'
// import $ from 'jquery'

class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        // eslint-disable-next-line
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        return (
            <div>
                <nav className="nav-wrapper white">
                    <div className="container">
                        <Link to="/" className="brand-logo logo blue-text"><img src={Logo} alt="Sixtyfour Bits" /></Link>
                        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
                            <Icon>menu</Icon>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/about" className="black-text">About</NavLink></li>
                            <li><NavLink to="/expertise" className="black-text">Expertise</NavLink></li>
                            <li><NavLink to="/contact" className="black-text">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">
                    <li><NavLink to="/" className="black-text">Home</NavLink></li>
                    <li><NavLink to="/about" className="black-text">About</NavLink></li>
                    <li><NavLink to="/expertise" className="black-text">Expertise</NavLink></li>
                    <li><NavLink to="/contact" className="black-text">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
    
}

export default Navbar
