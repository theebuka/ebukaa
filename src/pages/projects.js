import React, {Component} from 'react';
import Tabs from './../components/project-nav.js';
import DevCard from './../components/project-card.js';

class Projects extends Component {
    render() {
        let devs = [
            {title: "Vix", body: "UI component and styling library for rapid frontend prototyping", stack: "CSS", github: "", site: ""},
            {title: "Smirky", body: "Quote generator for contemporary people", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Nyx", body: "Chatbot for the web", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Password Gen", body: "Password generator", stack: "HTML, CSS, JS", github: "", site: ""}
        ];
        let design = [
            {title: "Vix", body: "UI component and styling library for rapid frontend prototyping", stack: "CSS", github: "", site: ""},
            {title: "Smirky", body: "Quote generator for contemporary people", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Nyx", body: "Chatbot for the web", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Password Gen", body: "Password generator", stack: "HTML, CSS, JS", github: "", site: ""}
        ];
        let writing = [
            {title: "Vix", body: "UI component and styling library for rapid frontend prototyping", stack: "CSS", github: "", site: ""},
            {title: "Smirky", body: "Quote generator for contemporary people", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Nyx", body: "Chatbot for the web", stack: "HTML, CSS, JS", github: "", site: ""},
            {title: "Password Gen", body: "Password generator", stack: "HTML, CSS, JS", github: "", site: ""}
        ]
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