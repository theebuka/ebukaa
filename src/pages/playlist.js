import React, {Component} from 'react';
// import MiscSectionHeader from './../components/misc-section-header.js';
import Item from './../components/item.js';

class Playlist extends Component {
    render() {
        let singles = [
            {track: "Last Memory", artiste: "Takeoff", year: 2018, genre: "Trap", rating: 5},
            {track: "Last Memory1", artiste: "Takeoff1", year: 2018, genre: "Trap1", rating: 5},
            {track: "Last Memory2", artiste: "Takeoff2", year: 2018, genre: "Trap2", rating: 5},
            {track: "Last Memory3", artiste: "Takeoff3", year: 2018, genre: "Trap3", rating: 5}
        ]
        let albums = [
            {track: "Last Memory", artiste: "Takeoff", year: 2018, genre: "Trap", rating: 5},
            {track: "Last Memory1", artiste: "Takeoff1", year: 2018, genre: "Trap1", rating: 5},
            {track: "Last Memory2", artiste: "Takeoff2", year: 2018, genre: "Trap2", rating: 5},
            {track: "Last Memory3", artiste: "Takeoff3", year: 2018, genre: "Trap3", rating: 5}
        ]
        return (
            <section className="Playlist">
                {/* <MiscSectionHeader headerText="Playlist" /> */}
                <div>
                    {/* <h3>Singles</h3> */}
                    {singles.map(function(single) {
                        return <Item key={single.id} track={single.track} artiste={single.artiste} year={single.year} genre={single.genre} rating={single.rating} />
                    })}
                </div>
                <div>
                    {/* <h3>Albums</h3> */}
                    {albums.map(function(album) {
                        return <Item key={album.id} track={album.track} artiste={album.artiste} year={album.year} genre={album.genre} rating={album.rating} />
                    })}
                </div>
            </section>
        )
    }
};

export default Playlist;