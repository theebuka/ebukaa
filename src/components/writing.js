import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Writing extends Component {
    render() {
        return (
            <section className="Writing Page">
                <div className="header">
                    <div>
                        <h2>{this.props.date}</h2>
                        <h2>{this.props.time}</h2>
                        <h2>{this.props.identifier}</h2>
                    </div>
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </div>
                    <div>
                        <img src={this.props.image} alt={this.props.alt} onError={(event) => event.target.style.display = 'none'} />
                    </div>
                </div>
                <div className="body">
                    {this.props.children}
                </div>
                <ul className='in-page-nav-section'>
                    <li>
                        <Link to="" className=''>Placeholder</Link>
                    </li>
                    <li>
                        <Link to="" className=''>Placeholder</Link>
                    </li>
                </ul>
            </section>
        )
    }
};

class WritingSection extends Component {
    render() {
        return (
            <div className="writing-section">
                {this.props.children}
            </div>
        )
    }
};

class WritingSectionHeader extends Component {
    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
};

class WritingSectionImage extends Component {
    render() {
        return (
            <img src={this.props.image} alt={this.props.alt} />
        )
    }
};

class WritingSectionText extends Component {
    render() {
        return (
            <p>{this.props.children}</p>
        )
    }
};

export { Writing, WritingSection, WritingSectionHeader, WritingSectionImage, WritingSectionText };