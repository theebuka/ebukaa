import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ErrorImage from './../images/error.svg';

class Error extends Component {
    render() {
        return(
            <section className="Error Page">
                <div className='error-wrapper'>
                    <div>
                        <img src={ErrorImage} alt="404 error of a robot"></img>
                        <h1>404</h1>
                        <h3>Not found</h3>
                    </div>
                    <p>
                        Seems like you've entered a broken link (my bad) or the resource you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="primary">Back to Home</Link>
                </div>
            </section>
        )
    }
};

export default Error;