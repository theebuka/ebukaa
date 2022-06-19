import React, { Component } from 'react';
import PeopleCard from './../../components/peoplecard.js';
import { peopledata } from './../../data/people-data.js';

class People extends Component {
    render() {
        return (
            <section className="People Page">
                <ul>
                    {peopledata.map(function (item) {
                        return <PeopleCard key={item.id} person={item.person} specialty={item.specialty} contact={item.contact} />
                    })}
                </ul>
            </section>
        )
    }
};

export default People;