import React, { Component } from 'react';
import ResourceCard from './../../components/resourcecard.js';
import { resourcesdata } from './../../data/resources-data.js';

class Resources extends Component {
    render() {
        return (
            <section className="Resources Page">
                <ul>
                    {resourcesdata.map(function (item) {
                        return <ResourceCard key={item.id} resource={item.resource} link={item.link} summary={item.summary} />
                    })}
                </ul>
            </section>
        )
    }
};

export default Resources;