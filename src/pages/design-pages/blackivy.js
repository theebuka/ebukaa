import React, { Component } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { CaseStudy, CaseStudySection, CaseStudySectionHeader, CaseStudySectionImage, CaseStudySectionText } from '../../components/case-study.js';
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
            <CaseStudy title="Black Ivy Hairs" subtitle="Crafting a brand logo for a scaling retail hair brand in Enugu, Nigeria" role="Designer" niche="Fashion" timeframe="May 2021" type="Brand Identity" summary="Children of the sun, see your time has just begun, searching for your ways, through adventures every day." next="/">

                <CaseStudySection>
                    <CaseStudySectionHeader>Problem Statement</CaseStudySectionHeader>
                    <CaseStudySectionImage image={Placeholder} alt="Product-blah-blah" />
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                </CaseStudySection>

                <CaseStudySection>
                    <CaseStudySectionHeader>Problem Statement</CaseStudySectionHeader>
                    <CaseStudySectionImage image={Placeholder} alt="Product-blah-blah" />
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                </CaseStudySection>

                <CaseStudySection>
                    <CaseStudySectionHeader>Problem Statement</CaseStudySectionHeader>
                    <CaseStudySectionImage image={Placeholder} alt="Product-blah-blah" />
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                </CaseStudySection>

                <CaseStudySection>
                    <CaseStudySectionHeader>Problem Statement</CaseStudySectionHeader>
                    <CaseStudySectionImage image={Placeholder} alt="Product-blah-blah" />
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                    <CaseStudySectionText>
                        Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might.
                        Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. 
                    </CaseStudySectionText>
                </CaseStudySection>

            </CaseStudy>
        )
    }
}

export default BlackIvy;