import React, {Component} from 'react';
import HomeImage1 from './../images/img-6.png';

class Home extends Component {
    render() {
        return (
            <section className="home">
                <div class="container">
                    <div class="glitch" data-text="Developer.Designer.Creative.">Developer.Designer.Creative.</div>
                    <div class="glow">Developer.Designer.Creative.</div>
                    {/* <p class="subtitle">Developer. Designer. Creative.</p> */}
                </div>
                <div className="home-images">
                    <img src={HomeImage1} className="home-image" alt="objects in taste with the author's aesthetic"></img>
                </div>
            </section>
        )
    }
};

export default Home;