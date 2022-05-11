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
                <Link to={this.props.next} className="tertiary">Next Case Study <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
            </section>
        )
    }
}

class CaseStudySection extends Component {
    render() {
        return (
            <div className="case-study-section" data-scroll>
                <h3>{this.props.header}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export {CaseStudy, CaseStudySection};