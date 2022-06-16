import React, { Component } from 'react';
import ThoughtCard from './../../components/thoughtcard.js';
import { thoughtsdata } from './../../data/thoughts-data.js';

class Thoughts extends Component {
    render() {
        return (
            <section className="Thoughts Page">
                {thoughtsdata.map(function (item) {
                    return <ThoughtCard key={item.id} title={item.title} thought={item.thought} datetime={item.datetime} />
                })}
            </section>
        )
    }
};

export default Thoughts;