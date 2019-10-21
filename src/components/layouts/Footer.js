import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon'
import Logo from '../media/img/sixtyfour.png'

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-4">
        <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <div className="logo">
                        <img src={Logo} alt="Sixtyfour Bits" />
                    </div>
                </div>
                <div className="col s12 m2">
                    <h5>Company</h5>
                    <ul>
                        <li><Link to="/" className="grey-text">About</Link></li>
                        <li><Link to="/" className="grey-text">Contact</Link></li>
                        <li><Link to="/" className="grey-text">Security</Link></li>
                        <li><Link to="/" className="grey-text">Investors</Link></li>
                        <li><Link to="/" className="grey-text">News</Link></li>
                        <li><Link to="/" className="grey-text">Events</Link></li>
                        <li><Link to="/" className="grey-text">Gallery</Link></li>
                        <li><Link to="/" className="grey-text">Careers</Link></li>
                    </ul>
                </div>
                <div className="col s12 m2">
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
                <div className="col s12 m2">
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
                <div className="col s12 m2">
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
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container grey-text">
                © Sixtyfourbits 2019
                <span className="right">
                    <Link to="/" className="grey-text">Sitemap</Link>
                    <Link to="/" className="grey-text">Privacy & Cookies</Link>
                    <Link to="/" className="grey-text">Terms of use</Link>
                    <Link to="/" className="grey-text">Trademarks</Link>
                    <Link to="/" className="grey-text">Safety & eco</Link>
                </span>
                <div className="fixed-action-btn">
                    <p className="btn-floating btn-large red">
                        <Icon>mode_edit</Icon>
                    </p>
                    <ul>
                        <li><span className="btn-floating red"><i className="material-icons">insert_chart</i></span></li>
                        <li><span className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></span></li>
                        <li><span className="btn-floating green"><i className="material-icons">publish</i></span></li>
                        <li><span className="btn-floating blue"><i className="material-icons">attach_file</i></span></li>
                    </ul>
                </div>            
            </div>
          </div>
    </footer>    
  )
}

export default Footer;
