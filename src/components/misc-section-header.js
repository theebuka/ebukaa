import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MiscSectionHeader extends Component {
    render() {
        return(
            <div className="misc-header">
                <h1>{this.props.headerText}</h1>
                <Link to="/misc"><FontAwesomeIcon icon="arrow-left"/>Back</Link>
            </div>
        )
    }
};

export default MiscSectionHeader;