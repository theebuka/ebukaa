import React, {Component} from 'react';
import MiscSectionHeader from './../components/misc-section-header.js';
import {singles, albums} from './../data/playlist-data.js';
import {pItem} from '../components/item.js';

class Playlist extends Component {
    render() {
        return (
            <section className="Playlist">
                <MiscSectionHeader headerText="Playlist" />
                <h3>Singles</h3>
                <div>
                    {singles.map(function(single) {
                        return <pItem key={singles} track={single.track} artiste={single.artiste} year={single.year} genre={single.genre} rating={single.rating} />
                    })}
                </div>
                <h3>Albums</h3>
                <div>
                    {albums.map(function(album) {
                        return <pItem key={albums} track={album.track} artiste={album.artiste} year={album.year} genre={album.genre} rating={album.rating} />
                    })}
                </div>
            </section>
        )
    }
};

export default Playlist;