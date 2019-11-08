import React, { Component } from 'react'
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
                            <div className="col s12 m6">
                                <p>
                                    <span className="large material-icons">email</span>
                                    info@sixtyfourbits.com
                                </p>
                            </div>
                            <div className="col s12 m6 contact-form">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" className="validate" />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" className="validate" />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="company" type="text" className="validate" />
                                            <label htmlFor="company">Company</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="phone" type="text" className="validate" />
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
                                        <p className="right-align"><button className="btn btn-large waves-effect waves-light orange lighten-1" type="button" name="action">Send Message</button></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <ul id="tabs-swipe-demo" className="tabs">
                                    <li className="tab col s4"><a className="active" href="#america">United States</a></li>
                                    <li className="tab col s4"><a href="#australia">Australia</a></li>
                                    <li className="tab col s4"><a href="#bangladesh"> Bangladesh</a></li>
                                </ul>
                                <div id="america" className="blue location">Test 1</div>
                                <div id="australia" className="red location">Test 2</div>
                                <div id="bangladesh" className="green location">Test 3</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact
