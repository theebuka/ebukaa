import React, { Component } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { CaseStudy, CaseStudySection } from '../../components/case-study.js';
import Placeholder from './../../images/Artboard 2@6x.jpg';

class BlackIvy extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Case-study"),
            smooth: true
        })
    }
    render() {
        return (
            <CaseStudy title="Black Ivy Hairs" role="Designer" niche="Fashion" timeframe="May 2021" type="Logo" next="/">

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

export default BlackIvy;