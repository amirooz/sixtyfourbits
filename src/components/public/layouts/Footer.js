import React, {Component} from 'react'
import { Link } from 'react-router-dom';
// import { Icon } from './Icon'
import Logo from '../../media/img/sixtyfour.png'
import M from 'materialize-css/dist/js/materialize.min.js'
import Magento from '../../media/img/magento-developer-badges.png'

class Footer extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible')
        // eslint-disable-next-line
        var instances = M.Collapsible.init(elems)
    }
    render() {
        return (
            <footer className="page-footer grey lighten-4">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 hide-on-small-only">
                            <div className="logo">
                                <img src={Logo} alt="Sixtyfour Bits" />
                            </div>
                            <div className="badge">
                                <img src={Magento} alt="Magento Partner" />
                            </div>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Company</h5>
                            <ul>
                                <li><Link to="/about" className="grey-text">About</Link></li>
                                <li><Link to="/contact" className="grey-text">Contact</Link></li>
                                <li><Link to="/" className="grey-text">Security</Link></li>
                                <li><Link to="/" className="grey-text">Investors</Link></li>
                                <li><Link to="/" className="grey-text">News</Link></li>
                                <li><Link to="/" className="grey-text">Events</Link></li>
                                <li><Link to="/" className="grey-text">Gallery</Link></li>
                                <li><Link to="/" className="grey-text">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Country</h5>
                            <ul>
                                <li><Link to="/" className="grey-text">Australia</Link></li>
                                <li><Link to="/" className="grey-text">Canada</Link></li>
                                <li><Link to="/" className="grey-text">USA</Link></li>
                                <li><Link to="/" className="grey-text">UK</Link></li>
                                <li><Link to="/" className="grey-text">Swizerlan</Link></li>
                                <li><Link to="/" className="grey-text">Germany</Link></li>
                                <li><Link to="/" className="grey-text">Greenland</Link></li>
                                <li><Link to="/" className="grey-text">Newzealand</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Top University</h5>
                            <ul>
                                <li><Link to="/" className="grey-text">Western University</Link></li>
                                <li><Link to="/" className="grey-text">Brock University</Link></li>
                                <li><Link to="/" className="grey-text">York University </Link></li>
                                <li><Link to="/" className="grey-text">University of Canada</Link></li>
                                <li><Link to="/" className="grey-text">Trent University</Link></li>
                                <li><Link to="/" className="grey-text">University of Windsor</Link></li>
                                <li><Link to="/" className="grey-text">University of Guelph </Link></li>
                                <li><Link to="/" className="grey-text">Queens University </Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Get In</h5>
                            <ul>
                                <li><Link to="/" className="grey-text">Facebook</Link></li>
                                <li><Link to="/" className="grey-text">Instagram</Link></li>
                                <li><Link to="/" className="grey-text">Twitter</Link></li>
                                <li><Link to="/" className="grey-text">Snapchat</Link></li>
                                <li><Link to="/" className="grey-text">Youtube</Link></li>
                                <li><Link to="/" className="grey-text">Linkedin</Link></li>
                                <li><Link to="/" className="grey-text">Skype</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 hide-on-med-and-up">
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header grey-text"> <strong>Company</strong> </div>
                                    <div className="collapsible-body grey-text">
                                        <ul>
                                            <li><Link to="/about" className="grey-text">About</Link></li>
                                            <li><Link to="/contact" className="grey-text">Contact</Link></li>
                                            <li><Link to="/" className="grey-text">Security</Link></li>
                                            <li><Link to="/" className="grey-text">Investors</Link></li>
                                            <li><Link to="/" className="grey-text">News</Link></li>
                                            <li><Link to="/" className="grey-text">Events</Link></li>
                                            <li><Link to="/" className="grey-text">Gallery</Link></li>
                                            <li><Link to="/" className="grey-text">Careers</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header grey-text">Services</div>
                                    <div className="collapsible-body grey-text">
                                        <ul>
                                            <li><Link to="/about" className="grey-text">About</Link></li>
                                            <li><Link to="/contact" className="grey-text">Contact</Link></li>
                                            <li><Link to="/" className="grey-text">Security</Link></li>
                                            <li><Link to="/" className="grey-text">Investors</Link></li>
                                            <li><Link to="/" className="grey-text">News</Link></li>
                                            <li><Link to="/" className="grey-text">Events</Link></li>
                                            <li><Link to="/" className="grey-text">Gallery</Link></li>
                                            <li><Link to="/" className="grey-text">Careers</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header grey-text">Products</div>
                                    <div className="collapsible-body grey-text">
                                        <ul>
                                            <li><Link to="/about" className="grey-text">About</Link></li>
                                            <li><Link to="/contact" className="grey-text">Contact</Link></li>
                                            <li><Link to="/" className="grey-text">Security</Link></li>
                                            <li><Link to="/" className="grey-text">Investors</Link></li>
                                            <li><Link to="/" className="grey-text">News</Link></li>
                                            <li><Link to="/" className="grey-text">Events</Link></li>
                                            <li><Link to="/" className="grey-text">Gallery</Link></li>
                                            <li><Link to="/" className="grey-text">Careers</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header grey-text">Partner</div>
                                    <div className="collapsible-body">
                                        <div className="badge">
                                            <img src={Magento} alt="Magento Partner" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container grey-text">
                        <span className="copyright">
                            © Sixtyfourbits 2019
                        </span>
                        <span className="right hide-on-med-and-down">
                            <Link to="/" className="grey-text">Sitemap</Link>
                            <Link to="/" className="grey-text">Privacy & Cookies</Link>
                            <Link to="/" className="grey-text">Terms of use</Link>
                            <Link to="/" className="grey-text">Trademarks</Link>
                            <Link to="/" className="grey-text">Safety & eco</Link>
                        </span>           
                    </div>
                </div>
            </footer>    
        )
    }
}

export default Footer;
