import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LocomotiveScroll from 'locomotive-scroll';

class CaseStudy extends Component {
   /*  componentDidMount() {
      // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Case-study"),
            smooth: true
        })
    } */
    render() {
        return (
            <section className="Case-study Page">
                <div className="header">
                    <div>
                        <div>
                            <span className='minor-subheading'>Project Title</span>
                            <h2>{this.props.title}</h2>
                        </div>
                        <div>
                            <span className='minor-subheading'>Subtitle</span>
                            <h3>{this.props.subtitle}</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='minor-subheading'>Role</span>
                            <h4>{this.props.role}</h4>
                        </div>
                        <div>
                            <span className='minor-subheading'>Type</span>
                            <h4>{this.props.type}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='minor-subheading'>Niche</span>
                            <h4>{this.props.niche}</h4>
                        </div>
                        <div>
                            <span className='minor-subheading'>Timeframe</span>
                            <h4>{this.props.timeframe}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='minor-subheading'>Project Summary</span>
                            <p>{this.props.summary}</p>
                        </div>
                    </div>
                </div>
                <div className="body">
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
            <div className="case-study-section">
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