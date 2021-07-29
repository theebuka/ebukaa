import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Shop extends Component {
    render() {
        return (
            <section className="Shop">
                <div>
                    <span className="bright">Coming Soon</span>
                    <Link to="/" className="primary">Back to Home</Link>
                    <Link to="/misc" className="tertiary">To next page <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
                </div>
            </section>
        )
    }
};

export default Shop;