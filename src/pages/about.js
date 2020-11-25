import React, {Component} from 'react';
import Intro from './../components/intro-sections.js';
import Skillcard from './../components/skill-card.js';

class About extends Component {
    render() {
        return (
            <section className="About">
                <div className="intro">
                    <Intro heading="Bio" body="Hi. I’m Ebuka, a frontend developer, UI/UX designer, graphic designer with a flair for writing." />
                    <Intro heading="Background" body="I'm fully self-taught, i live and work in Lagos and i'm currently studying to get my degree in Medical Radiography at Nnamdi Azikiwe Unversity, Anambra." />
                    <Intro heading="Experience" body="I've participated in remote internships from Hotels.ng and Andela x Facebook SDG Cohorts." />
                    <Intro heading="Random" body="I'm a big basketball fan and an even bigger Stephen Curry fanboy. When i’m not fighting to stay alive in medical school, i like exploring new music, reading books and working out on the court. Dogs scare me. Anime is Gold." />
                </div>
                <div className="skill">
                    <h6>Skillset</h6>
                    <div>
                        <Skillcard title="Build" body="Code functional, interactive and responsive webpages with a slew of modern tools, libraries and frameworks made for the web." tools="Html, Css, Javascript, Jquery, React, Bootstrap, WordPress" />
                        <Skillcard title="Design" body="Design visually appealing and usable interfaces with proficiency in various design software with great attention to detail." tools="Adobe XD, Figma, InVision Studio, Adobe Photoshop, Adobe Illustrator"/>
                        <Skillcard title="Write" body="Create and proofread engaging content for use in articles, books, websites, products." />
                    </div>
                </div>
            </section>
        )
    }
};

export default About;