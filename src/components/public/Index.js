import React, { Component } from 'react'
import ParticlesContainer from './ParticlesContainer'

import flexibility from '../media/img/qualities-1.png'
import process from '../media/img/qualities-2.png'
import expertise from '../media/img/qualities-3.png'
import reseach from '../media/img/research.png'
import cretion from '../media/img/creation-innovation.png'
import design from '../media/img/design-framework.png'
import prototype from '../media/img/prototype.png'
import technical from '../media/img/technical-support.png'
import quality from '../media/img/quality-testing.png'


class Home extends Component {
    render() {
        return (
            <div>

                <ParticlesContainer />

                <div className="container header-section">
                    <div className="row">
                        <div className="col s12 m10 l7">
                            <div className="blocks title border top bottom">
                                <h2 className="title white-text">Creating the ultimate customer
                                    experience through integrated
                                    system solutions
                                </h2>					
                            </div>                           
                        </div>
                    </div>
                </div>
                               
                <section className="effectiveness">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6">
                                <div className="blocks title border top bottom mb-40 pa-25">
                                    <h2 className="title">Committed to <br /> Effectiveness</h2>					
                                </div>                           
                            </div>
                            <div className="col s12 m6">
                                <p>Sixtyfourbits is a highly experienced team dedicated to providing software development solutions. Through flexible requirement analysis, comprehensive documentation and responsive testing we create customised applications that can be incorporated with current or new infrastructure and systems. Sixtyfourbits is committed to helping its clients achieve new functionality and make their business processes more effective.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="quality secondColor">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="blocks title border bottom bd-white">
                                    <h2 className="title">Key Qualities</h2>
                                </div>                                
                            </div>
                            <div className="blocks qualities">
                                <div className="col s12 m4">
                                    <div className="heading">
                                        <div className="image">
                                            <img src={flexibility} className="img-responsive" alt="" />
                                        </div>									
                                        <div className="title"><h3>Flexibility</h3></div>								
                                    </div>								
                                    <div className="content">
                                        <p>Our relatively small size allows us to be flexible and adaptable in providing our clients with innovative and most efficient solutions.</p>
                                    </div>							
                                </div>												
                                <div className="col s12 m4">								
                                    <div className="heading">									
                                        <div className="image">										
                                            <img src={process} className="img-responsive" alt="" />									
                                        </div>									
                                        <div className="title"><h3>Fast Process</h3></div>								
                                    </div>								
                                    <div className="content">
                                        <p>With a team of 12 highly experienced employees we react fast and handle up to 5-10 different tasks / projects simultaneously.</p>
                                    </div>							
                                </div>												
                                <div className="col s12 m4">								
                                    <div className="heading">									
                                        <div className="image">										
                                            <img src={expertise} className="img-responsive" alt="" />									
                                        </div>									
                                        <div className="title"><h3>Expertise</h3></div>								
                                    </div>								
                                    <div className="content">
                                        <p>More than a half of our team hold 6-12 years of experience working with high complexity projects in telco and finance industries.</p>
                                    </div>							
                                </div>									
                            </div>
                        </div>
                    </div>
                </section>

                <section className="work-process">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l8">
                                <div className="blocks title border bottom mb-40">
                                    <h2 className="title">Working with Sixtyfourbits</h2>
                                </div>
                                <p>We combine in-depth knowledge with our passion for excellence and our ambition to find the best development solutions. This allows us to deliver unique results all the way from idea to product launch.</p>
                            </div>
                        </div>
                        <div className="blocks features row">
                            <div className="col s6 m4 l2">								
                                <div className="image">
                                    <img src={reseach} className="img-responsive" alt="" />
                                </div>								
                                <div className="content">
                                    <div className="title">Research</div>
                                </div>		
                            </div>
                            <div className="col s6 m4 l2">								
                                <div className="image">	
                                    <img src={cretion} className="img-responsive" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">Modeling & creation<br />of innovation </div>
                                </div>
                            </div>
                            <div className="col s6 m4 l2">
                                <div className="image">
                                    <img src={design} className="img-responsive" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">Design<br/>Framework</div>
                                </div>
                            </div>
                            <div className="col s6 m4 l2">
                                <div className="image">
                                    <img src={prototype} className="img-responsive" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">Prototype</div>
                                </div>
                            </div>
                            <div className="col s6 m4 l2">
                                <div className="image">
                                    <img src={technical} className="img-responsive" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">Technical<br/>support</div>
                                </div>
                            </div>
                            <div className="col s6 m4 l2">
                                <div className="image">
                                    <img src={quality} className="img-responsive" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">Quality<br/>testing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="latest-work secondColor">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l8">
                                <div className="blocks title border bottom bd-white mb-40">
                                    <h2 className="title">Our Latest Work</h2>
                                </div>
                                <p>Flexible and integrated solutions help our clients to streamline their processes and achieve effectiveness. These are the latest projects we have accomplished:</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
