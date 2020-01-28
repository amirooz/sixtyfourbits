import React, { Component } from 'react'
import AboutUs from '../media/img/about-us.svg'

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="header base-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="blocks title border top bottom bd-white">
                                    <h2 className="title white-text">In-depth knowledge and innovative approach</h2>					
                                </div>  
                            </div>
                            <div className="col s12 m6 center hide-on-med-and-down">
                            <img src={AboutUs} alt="About us" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m8 offset-m2 center-align">
                                <h2>About The Company</h2>
                                <p>Sixtyfourbits is a successful startup company established in North Sydney, Australia. It has started it’s journey with develop E-commerce & Marketplace, Opensource Integrations but now established as one of the growing software company in the international market. After successful business operation is North Sydney, we’re going to open our Branch in Dhaka, New York, Kualalumpur & Colombo.</p>
                                <p> Currently we’re working for individual companies & our own product development to hold our position in competitive market. We’re providing service for office automation, web & mobile application development, Cloud & DevOps, E-commerce & Marketplace, Opensource Integrations, ERP, Machine Learning and AI, digital marketing & advertising, digitalization & so on.</p>
                                <p> We help large-medium-small companies improve their customer experience using information technology. Sixtyfourbits believes that linking people, technology and organisations is the ultimate future and only way to make the world smart.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
