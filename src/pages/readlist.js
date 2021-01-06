import React, {Component} from 'react';
import MiscSectionHeader from '../components/misc-section-header.js';
import {reads} from '../data/readlist-data.js';
import rItem from '../components/item.js';

class Readlist extends Component {
    render() {
        return (
            <section className="Readlist">
                <MiscSectionHeader headerText="Readlist" />
                {/* <h3>Singles</h3> */}
                <div>
                    {reads.map(function(read) {
                        return <rItem key={read.id} title={read.title} author={read.author} year={read.year} genre={read.genre} rating={read.rating} />
                    })}
                </div>
            </section>
        )
    }
};

export default Readlist;