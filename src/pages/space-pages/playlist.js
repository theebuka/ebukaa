import React, {Component} from 'react';
// import MiscSectionHeader from './../components/misc-section-header.js';
import {singles} from '../../data/playlist-data.js';
import SpaceSectionItem from './../../components/space-section-item.js';
import LocomotiveScroll from 'locomotive-scroll';

class Playlist extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Playlist"),
            smooth: true
        })
    }
    render() {
        return (
            <section className="Playlist" data-scroll-section>
                <h3>Singles</h3>
                <div>
                    {singles.map(function(single) {
                        return <SpaceSectionItem key={singles} title={single.title} link={single.link} label={single.creator} genre={single.genre} year={single.year} />
                    })}
                </div>
            </section>
        )
    }
};

export default Playlist;