import React, { Component } from 'react'
import AboutUs from '../media/img/about-us.svg'

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="header">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col s12 m5">
                                <div className="blocks title border top bottom bd-white">
                                    <h2 className="title white-text">In-depth knowledge and
innovative approach</h2>					
                                </div>  
                            </div> */}
                            <div className="col s12 m12 bg-image">
                                <img src={AboutUs} alt="Search Engine Optimization" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
