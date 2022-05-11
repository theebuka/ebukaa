import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from './../components/project-nav.js';
import Project from './../components/projects-card.js';
import {dev, design, writing} from './../data/project-data.js';

class Projects extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
          el: document.querySelector(".Projects"),
          smooth: true
        });
    }

    render() {
        return(
            <section className="Projects">
                <div>
                    <Tabs>
                        <ul className='project-item' label="Development">
                            {dev.map(function (item) {
                                return <Project key={dev} title={item.title} summary={item.summary} link={item.link} number={item.number} data-scroll />
                            })}
                        </ul>
                        <ul id="Design-projects" className='project-item' label="Design">
                            {design.map(function (item) {
                                return <Project key={design} title={item.title} summary={item.summary} link={item.link} number={item.number} data-scroll />
                            })}
                        </ul>
                        <ul className='project-item' label="Writing">
                            {writing.map(function (item) {
                                return <Project key={writing} title={item.title} summary={item.summary} link={item.link} number={item.number} data-scroll />
                            })}
                        </ul>
                    </Tabs>
                    <Link to="/shop" className="tertiary" data-scroll>Shop <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
                </div>
            </section>
        )
    }
};

export default Projects;