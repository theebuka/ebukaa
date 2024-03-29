import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Shop extends Component {
    render() {
        return (
            <section className="Shop Page">
                <div>
                    <h1 className="bright">Coming Soon</h1>
                    <Link to="/" className="primary">Back to Home</Link>
                    {/* <Link to="/space" className="tertiary">Space <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link> */}
                </div>
            </section>
        )
    }
};

export default Shop;