import React, { Component } from 'react';
// import './Media.css';
import { Slide } from 'react-slideshow-image';

class Media extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }



    render() {
        const size = {
            width: 250,
            height: this.state.width * 0.3,
        }
        const properties = {
            duration: 1000*60*60,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return (
            <div>
                <Slide {...properties}>
                    <div className="each-slide">
                        <div>
                            <span>
                                <iframe title='Debbie Reynolds - Live at Sofar Sounds Chicago' width={this.state.width * 0.4} height={this.state.width * 0.4 * (9 / 16)} src="https://www.youtube.com/embed/kRQT1_1fWlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span>
                                <iframe title='Take A Ride - Official Video' width={this.state.width * 0.4} height={this.state.width * 0.4 * (9 / 16)} src="https://www.youtube.com/embed/Nw3y1Yc1Pcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span>
                                <iframe title='Take A Ride - Live at Sofar Sounds Chicago' width={this.state.width * 0.4} height={this.state.width * 0.4 * (9 / 16)} src="https://www.youtube.com/embed/pYjDJPnU-CE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </span>
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default Media;