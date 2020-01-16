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
                                <li><Link to="/about" className="base-text">About</Link></li>
                                <li><Link to="/contact" className="base-text">Contact</Link></li>
                                <li><Link to="/" className="base-text">Security</Link></li>
                                <li><Link to="/" className="base-text">FAQ</Link></li>
                                <li><Link to="/" className="base-text">News</Link></li>
                                <li><Link to="/" className="base-text">Events</Link></li>
                                <li><Link to="/" className="base-text">Gallery</Link></li>
                                <li><Link to="/" className="base-text">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Expertise</h5>
                            <ul>
                                <li><Link to="/expertise#cloud" className="base-text">Cloud & DevOps</Link></li>
                                <li><Link to="/expertise#ecommerce" className="base-text">E-commerce & Marketplace</Link></li>
                                <li><Link to="/expertise#opensource" className="base-text">OpenSource Integrations</Link></li>
                                <li><Link to="/expertise#mobile-app" className="base-text">Mobile App Development</Link></li>
                                <li><Link to="/expertise#machine-ai" className="base-text">Machine Learning and AI</Link></li>
                                <li><Link to="/expertise#seo" className="base-text">Search Engine Optimization</Link></li>
                                <li><Link to="/expertise#erp" className="base-text">ERP Development</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Partners</h5>
                            <ul>
                                <li><Link to="/partner#aws" className="base-text">AWS</Link></li>
                                <li><Link to="/partner#gcp" className="base-text">Google Cloud Platform</Link></li>
                                <li><Link to="/partner#azure" className="base-text">Microsoft Azure</Link></li>
                                <li><Link to="/partner#magento" className="base-text">Magento</Link></li>
                                <li><Link to="/partner#shopify" className="base-text">Shopify</Link></li>
                                <li><Link to="/partner#paypal" className="base-text">PayPal</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 m2 hide-on-small-only">
                            <h5>Get In</h5>
                            <ul>
                                <li><Link to="/" className="base-text">Facebook</Link></li>
                                <li><Link to="/" className="base-text">Instagram</Link></li>
                                <li><Link to="/" className="base-text">Twitter</Link></li>
                                <li><Link to="/" className="base-text">Snapchat</Link></li>
                                <li><Link to="/" className="base-text">Youtube</Link></li>
                                <li><Link to="/" className="base-text">Linkedin</Link></li>
                                <li><Link to="/" className="base-text">Skype</Link></li>
                            </ul>
                        </div>
                        <div className="col s12 hide-on-med-and-up">
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header base-text"> <strong>Company</strong> </div>
                                    <div className="collapsible-body base-text">
                                        <ul>
                                            <li><Link to="/about" className="base-text">About</Link></li>
                                            <li><Link to="/contact" className="base-text">Contact</Link></li>
                                            <li><Link to="/" className="base-text">Security</Link></li>
                                            <li><Link to="/" className="base-text">FAQ</Link></li>
                                            <li><Link to="/" className="base-text">News</Link></li>
                                            <li><Link to="/" className="base-text">Events</Link></li>
                                            <li><Link to="/" className="base-text">Gallery</Link></li>
                                            <li><Link to="/" className="base-text">Careers</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header base-text"><strong>Expertise</strong></div>
                                    <div className="collapsible-body base-text">
                                        <ul>
                                            <li><Link to="/expertise#cloud" className="base-text">Cloud & DevOps</Link></li>
                                            <li><Link to="/expertise#ecommerce" className="base-text">E-commerce & Marketplace</Link></li>
                                            <li><Link to="/expertise#opensource" className="base-text">OpenSource Integrations</Link></li>
                                            <li><Link to="/expertise#mobile-app" className="base-text">Mobile App Development</Link></li>
                                            <li><Link to="/expertise#machine-ai" className="base-text">Machine Learning and AI</Link></li>
                                            <li><Link to="/expertise#seo" className="base-text">Search Engine Optimization</Link></li>
                                            <li><Link to="/expertise#erp" className="base-text">ERP Development</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header base-text"><strong>Partners</strong></div>
                                    <div className="collapsible-body base-text">
                                        <ul>
                                            <li><Link to="/partner#aws" className="base-text">AWS</Link></li>
                                            <li><Link to="/partner#gcp" className="base-text">Google Cloud Platform</Link></li>
                                            <li><Link to="/partner#azure" className="base-text">Microsoft Azure</Link></li>
                                            <li><Link to="/partner#magento" className="base-text">Magento</Link></li>
                                            <li><Link to="/partner#shopify" className="base-text">Shopify</Link></li>
                                            <li><Link to="/partner#paypal" className="base-text">PayPal</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header base-text"><strong>Get In</strong></div>
                                    <div className="collapsible-body base-text">
                                        <ul>
                                            <li><Link to="/" className="base-text">Facebook</Link></li>
                                            <li><Link to="/" className="base-text">Instagram</Link></li>
                                            <li><Link to="/" className="base-text">Twitter</Link></li>
                                            <li><Link to="/" className="base-text">Snapchat</Link></li>
                                            <li><Link to="/" className="base-text">Youtube</Link></li>
                                            <li><Link to="/" className="base-text">Linkedin</Link></li>
                                            <li><Link to="/" className="base-text">Skype</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container base-text">
                        <span className="copyright">
                            © Sixtyfourbits 2019
                        </span>
                        <span className="right hide-on-med-and-down">
                            <Link to="/" className="base-text">Sitemap</Link>
                            <Link to="/" className="base-text">Privacy & Cookies</Link>
                            <Link to="/" className="base-text">Terms of use</Link>
                            <Link to="/" className="base-text">Trademarks</Link>
                            <Link to="/" className="base-text">Safety & eco</Link>
                        </span>           
                    </div>
                </div>
            </footer>    
        )
    }
}

export default Footer;
