import React, { Component } from 'react';
import { CaseStudy, CaseStudySection } from '../../components/case-study.js';
import Placeholder from './../../images/Artboard 2@6x.jpg';

class Template extends Component {
    render() {
        return (
            <CaseStudy title="Black Ivy Hairs" niche="Fashion" year="2021" type="Logo" next="/about">

                <CaseStudySection
                    header="Product"
                    text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    image={Placeholder}
                    alt="Product-blah-blah"
                />

                <CaseStudySection
                    header="Product"
                    text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    image={Placeholder}
                    alt="Product-blah-blah"
                />

                <CaseStudySection
                    header="Product"
                    text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    image={Placeholder}
                    alt="Product-blah-blah"
                />

                <CaseStudySection
                    header="Product"
                    text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    image={Placeholder}
                    alt="Product-blah-blah"
                />

                <CaseStudySection
                    header="Product"
                    text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    image={Placeholder}
                    alt="Product-blah-blah"
                />

            </CaseStudy>
        )
    }
}

export default Template;