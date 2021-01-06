import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ErrorImage from './../images/error.svg';

class Error extends Component {
    render() {
        return(
            <section className="Error">
                <div>
                    <div>
                        <img src={ErrorImage} alt="404 error of a robot"></img>
                        <h1>404</h1>
                        <h3>Not found</h3>
                    </div>
                    <p>
                        Seems like you've entered a broken link (my bad) or the resource you're looking for doesn't exist.
                    </p>
                    <p>
                        Check the link again or <Link to="/">Go Back To Home Page</Link>
                    </p>
                </div>
            </section>
        )
    }
};

export default Error;