import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkTabs from './../components/work-nav.js';
import WorkCard from './../components/work-card.js';
import {dev, design, writing} from './../data/work-data.js';

class Work extends Component {
    render() {
        return(
            <section className="Work">
                <div>
                    <WorkTabs>
                        <ul className='work-item' label="Development">
                            {dev.map(function (item) {
                                return <WorkCard key={item.id} title={item.title} summary={item.summary} link={item.link} number={item.number} />
                            })}
                        </ul>
                        <ul id="Design-work" className='work-item' label="Design">
                            {design.map(function (item) {
                                return <WorkCard key={item.id} title={item.title} summary={item.summary} link={item.link} number={item.number} />
                            })}
                        </ul>
                        <ul className='work-item' label="Writing">
                            {writing.map(function (item) {
                                return <WorkCard key={item.id} title={item.title} summary={item.summary} link={item.link} number={item.number} />
                            })}
                        </ul>
                    </WorkTabs>
                    <Link to="/shop" className="tertiary" data-scroll>Shop <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
                </div>
            </section>
        )
    }
};

export default Work;