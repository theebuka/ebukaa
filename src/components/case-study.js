import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocomotiveScroll from 'locomotive-scroll';

class CaseStudy extends Component {
    componentDidMount() {
      // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Case-study"),
            smooth: true
        })
    }
    render() {
        return (
            <section className="Case-study" data-scroll-section>
                <div className="header" data-scroll-container>
                    <div>
                        <div data-scroll>
                            <span className='minor-subheading'>Project Title</span>
                            <h2 data-scroll>{this.props.title}</h2>
                        </div>
                        <div data-scroll>
                            <span className='minor-subheading'>Subtitle</span>
                            <h3 data-scroll>{this.props.subtitle}</h3>
                        </div>
                    </div>
                    <div>
                        <div data-scroll>
                            <span className='minor-subheading'>Role</span>
                            <h4 data-scroll>{this.props.role}</h4>
                        </div>
                        <div data-scroll>
                            <span className='minor-subheading'>Type</span>
                            <h4 data-scroll>{this.props.type}</h4>
                        </div>
                    </div>
                    <div>
                        <div data-scroll>
                            <span className='minor-subheading'>Niche</span>
                            <h4 data-scroll>{this.props.niche}</h4>
                        </div>
                        <div data-scroll>
                            <span className='minor-subheading'>Timeframe</span>
                            <h4 data-scroll>{this.props.timeframe}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='minor-subheading'>Project Summary</span>
                            <p data-scroll>{this.props.summary}</p>
                        </div>
                    </div>
                </div>
                <div className="body" data-scroll-container>
                    {this.props.children}
                </div>
                <div className='in-page-nav-section'>
                    <Link to="/work" className="tertiary in-page-nav"><FontAwesomeIcon icon={['fas', 'arrow-left']} /> All case studies</Link>
                    <Link to={this.props.next} className="tertiary in-page-nav">Next case study <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
                </div>
            </section>
        )
    }
};

class CaseStudySection extends Component {
    render() {
        return (
            <div className="case-study-section" data-scroll>
                {this.props.children}
            </div>
        )
    }
};

class CaseStudySectionHeader extends Component {
    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
};

class CaseStudySectionImage extends Component {
    render() {
        return (
            <img src={this.props.image} alt={this.props.alt} />
        )
    }
};

class CaseStudySectionText extends Component {
    render() {
        return (
            <p>{this.props.children}</p>
        )
    }
};

export {CaseStudy, CaseStudySection, CaseStudySectionHeader, CaseStudySectionImage, CaseStudySectionText};