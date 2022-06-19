import React, {Component} from 'react';
import { music, books} from '../../data/lists-data.js';
import { ListCard, ListCardSection } from '../../components/listcard.js';

class Lists extends Component {
    render() {
        return (
            <section className="Lists Page">
                <ListCardSection header="music">
                    {music.map(function(item) {
                        return <ListCard key={item.id} item={item.title} link={item.link} attribution={item.creator} />
                    })}
                </ListCardSection>
                <ListCardSection header="books">
                    {books.map(function(item) {
                        return <ListCard key={item.id} item={item.title} link={item.link} attribution={item.creator} />
                    })}
                </ListCardSection>
            </section>
        )
    }
};

export default Lists;