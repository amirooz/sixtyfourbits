import React, { Component } from 'react'
import Cloud from '../media/img/cloud_devops.svg'
import OpenSource from '../media/img/open_source.svg'
import Ecommerce from '../media/img/ecommerce.svg'
import MobileApps from '../media/img/mobile_apps.svg'
import MachineAI from '../media/img/machine-ai.svg'
import SEO from '../media/img/seo.svg'
import ERP from '../media/img/erp.svg'


export class Expertise extends Component {
    render() {
        return (
            <div className="expertise">
                <div className="header">

                </div>
                
                <section className="cloud" id="cloud">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6 bg-image">
                                <img src={Cloud} alt="Cloud & DevOps" />
                            </div>
                            <div className="col s12 m6">
                                <h4>Cloud & DevOps</h4>
                                <p>It is a hot buzz and enterprises are preferring Cloud Computing and Hosting over Traditional Shared Hosting.</p>

                                <p>Generally, In Traditional or Shared Hosting, A server with a fixed and limited configuration is shared by a set of different standalone websites. Websites share the server space, bandwidths and other crucial resources on the server. Such an architecture is obviously easy on the pocket but is not ideal for large-scale apps or systems which arises set of issues due to lagging or low performance.</p>

                                <p>Here comes the Cloud Computing on the play. Cloud Computing is based on the set of unified clusters of the servers which are integrated together which assures an uptime of upto 99.999%.</p>

                                <p>In Cloud Infrastructure, several servers work together to serve the users globally, which enhances the performance at its peak and help the enterprises to scale anytime with an ease. Verdict – Shared Hosts are ideal for small industries or websites, while Enterprises should adopt the Cloud Infrastructure for both the scalability and flexibility.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ecommerce" id="ecommerce">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6">
                                <h4>E-commerce & Marketplace</h4>
                                <p>Sixtyfourbits is a highly experienced team dedicated to providing software development solutions. Through flexible requirement analysis, comprehensive documentation and responsive testing we create customised applications that can be incorporated with current or new infrastructure and systems. Sixtyfourbits is committed to helping its clients achieve new functionality and make their business processes more effective.</p>
                            </div>
                            <div className="col s12 m6 bg-image">
                                <img src={Ecommerce} alt="E-commerce & Marketplace" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="opensource" id="opensource">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6 bg-image">
                                <img src={OpenSource} alt="OpenSource Integrations" />
                            </div>
                            <div className="col s12 m6">
                                <h4>OpenSource Integrations</h4>
                                <p>The digital world is becoming interlinked and more connected. Every retailer or a merchant wishes to serve an omnichannel experience to its customer base.</p>

                                <p>Today, most of the retailer owns a physical store along with an online eCommerce Store which is accompanied by a Mobile App. Retailers also wish to sell their goods at popular eCommerce Marketplaces like Etsy, eBay or others to outreach beyond their customer base.</p>

                                <p>It becomes quite hard for retailers to manage all these different entities at the same time. However, going omnichannel is a must have for any vendor in today’s competitive world, but it is hard to invest a huge amount of capital and resources for the sprouting small scaled ventures or vendors to get started. Apart from this, it is obvious a vendor will turn into an enterprise sooner or later and he may need Product Information Manager (PIM) to manage the huge dataset.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mobile-app" id="mobile-app">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6">
                                <h4>Mobile App Development</h4>
                                <p>As per Google 80% of the users own a smartphone. The Times published an article which highlights “More people now shop on Amazon using smartphones and tablets than computers”. Keeping these statistics in mind every business should target the large smartphone user base. Mobile apps can be used to enhance user product experience for smartphone users.</p>

                                <p>Mobile applications are intuitive and accessible. Mobile apps can be leveraged to create a multi-channel / omni-channel customer experience.</p>
                            </div>
                            <div className="col s12 m6 bg-image">
                                <img src={MobileApps} alt="Mobile App Development" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="machine-ai" id="machine-ai">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6 bg-image">
                                <img src={MachineAI} alt="Machine Learning and AI" />
                            </div>
                            <div className="col s12 m6">
                                <h4>Machine Learning and AI</h4>
                                <p>AI has just moved to the world of reality from the science fiction stories. AI lets the products to work smarter and not harder, by automating the entire process and lifecycle.</p>

                                <p>AI has just evolved like a weed in the recent years and entered a new era of unseen possibilities. We now have self-controlled drones, self-moving bicycles, and even self-controlled vehicles; which can highlight what AI is capable of doing in a real-world scenario in this day. On the other hand, Image recognization, automated detections, and digital personalization have been pushed to the next level.</p>

                                <p>AI brings in the idea of making machines works as human by adding smarter behaviour to them which helps to automate the processes and makes the product even more reliable. The world is moving at a faster pace and businesses are creating products using AI as a perk, letting their users have more rich and personalized experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="erp" id="erp">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6">
                                <h4>Search Engine Optimization</h4>
                                <p>Sixtyfourbits is a highly experienced team dedicated to providing software development solutions. Through flexible requirement analysis, comprehensive documentation and responsive testing we create customised applications that can be incorporated with current or new infrastructure and systems. Sixtyfourbits is committed to helping its clients achieve new functionality and make their business processes more effective.</p>
                            </div>
                            <div className="col s12 m6 bg-image">
                                <img src={SEO} alt="Search Engine Optimization" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="erp" id="erp">
                    <div className="container">
                        <div className="row banner">
                            <div className="col s12 m6 bg-image">
                                <img src={ERP} alt="ERP Development" />
                            </div>
                            <div className="col s12 m6">
                                <h4>ERP Development</h4>
                                <p>Sixtyfourbits is a highly experienced team dedicated to providing software development solutions. Through flexible requirement analysis, comprehensive documentation and responsive testing we create customised applications that can be incorporated with current or new infrastructure and systems. Sixtyfourbits is committed to helping its clients achieve new functionality and make their business processes more effective.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Expertise
