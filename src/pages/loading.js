import React, {Component} from 'react';

class LoadingScreen extends Component {
    render() {
        return(
            <section className="preloader-wrapper absolute">
                <div className="preloader-name">
                    <div>
                        <h1>CN.</h1>
                    </div>
                </div>
                <div className="preloader-line">
                    <div className='line'></div>
                </div>
            </section>
        )
    }
}

export default LoadingScreen;