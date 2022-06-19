import React, { Component } from 'react';
import WishlistCard from './../../components/wishlistcard.js';
import { wishlistdata } from './../../data/wishlist-data.js';

class Wishlist extends Component {
    render() {
        return (
            <section className="Wishlist Page">
                <ul>
                    {wishlistdata.map(function (item) {
                        return <WishlistCard key={item.id} item={item.item} link={item.link} />
                    })}
                </ul>
            </section>
        )
    }
};

export default Wishlist;