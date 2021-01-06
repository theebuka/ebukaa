import React, {Component} from 'react';
import Tabs from './../components/project-nav.js';
import DevCard from './../components/project-card.js';
import {devs, design, writing} from './../data/project-data.js';

class Projects extends Component {
    render() {
        return(
            <section className="Projects">
                <div>
                    <Tabs>
                        <div label="Development">
                            {devs.map(function (item) {
                                return <DevCard key={item.id} title={item.title} synopsis={item.body} stack={item.stack} linkGithub={item.github} linkSite={item.site} />
                            })}
                        </div>
                        <div label="Design">
                            {design.map(function (item) {
                                return <DevCard key={item.id} title={item.title} synopsis={item.body} stack={item.stack} linkGithub={item.github} linkSite={item.site} />
                            })}
                        </div>
                        <div label="Writing">
                            {writing.map(function (item) {
                                return <DevCard key={item.id} title={item.title} synopsis={item.body} stack={item.stack} linkGithub={item.github} linkSite={item.site} />
                            })}
                        </div>
                    </Tabs>
                </div>
            </section>
        )
    }
};

export default Projects;