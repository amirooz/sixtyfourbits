import React, { Component } from 'react'
import Contactimg from '../media/img/contact_us.svg'
import M from 'materialize-css/dist/js/materialize.min.js'

class Contact extends Component {
    componentDidMount(){
        var elem = document.querySelector("#tabs-swipe-demo");
        var instance = M.Tabs.init(elem)
        instance.select('test-swipe-1');
    }
    render() {
        return (
            <div className="contact">
                <section className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="blocks title border top bottom bd-white">
                                    <h2 className="title white-text">Let’s stay in touch!</h2>					
                                </div>  
                            </div>
                        </div>
                    </div>
                </section>

                <section className="query">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 bg-image">
                                <img src={Contactimg} alt="Contact" />
                            </div>
                            <div className="col s12 m6 contact-form">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="company" type="text" />
                                            <label htmlFor="company">Company</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="phone" type="text" />
                                            <label htmlFor="phone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" />
                                        <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <textarea id="message" className="materialize-textarea"></textarea>
                                        <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col m12">
                                        <p className="right-align"><button className="btn btn-large waves-effect waves-light baseColor" type="button" name="action">Send Message</button></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map m-t-50">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <ul id="tabs-swipe-demo" className="tabs">
                                    <li className="tab col s4"><a className="active base-text" href="#america"><b>USA</b></a></li>
                                    <li className="tab col s4"><a className="base-text" href="#australia"><b>AU</b></a></li>
                                    <li className="tab col s4"><a className="base-text" href="#bangladesh"><b>BD</b></a></li>
                                </ul>
                                <div id="america" className="location base-bg">
                                    <div className="row">
                                        <div className="col m4">
                                            <div className="address">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><i className="material-icons">room</i></td>
                                                            <td>3761 S Hill St, LA, CA 90007</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">mail</i></td>
                                                            <td>info@techbird.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">phone</i></td>
                                                            <td>+71656565595</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">public</i></td>
                                                            <td>www.techbird.com</td>
                                                        </tr>
                                                    </tbody>                                                    
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col m8 hide-on-small-only">Map</div>
                                    </div>
                                </div>
                                <div id="australia" className="location base-bg">
                                    <div className="row">
                                        <div className="col m4">
                                            <div className="address">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><i className="material-icons">room</i></td>
                                                            <td>409/48 Atchison, St Leonard's< br/> Sydney. NSW 2065</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">mail</i></td>
                                                            <td>info@techonus.com.au</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">phone</i></td>
                                                            <td>0450137890</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">public</i></td>
                                                            <td>www.techonus.com.au</td>
                                                        </tr>
                                                    </tbody>                                                    
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col m8 hide-on-small-only">Map</div>
                                    </div>
                                </div>
                                <div id="bangladesh" className="location base-bg">
                                    <div className="row">
                                        <div className="col m4">
                                            <div className="address">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><i className="material-icons">room</i></td>
                                                            <td>H-133, R-4, Banani, Dhaka - 1213</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">mail</i></td>
                                                            <td>info@sixtyfourbits.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">phone</i></td>
                                                            <td>+880-1830077330</td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="material-icons">public</i></td>
                                                            <td>www.sixtyfourbits.com</td>
                                                        </tr>
                                                    </tbody>                                                    
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col m8 hide-on-small-only">Map</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact
