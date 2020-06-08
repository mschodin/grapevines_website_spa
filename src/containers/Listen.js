import React, { Component } from 'react';
import './Listen.css';
import SpotifyPlayer from 'react-spotify-player';

class Listen extends Component {

    constructor(props){
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


    render(){
        const size = {
          width: 250,
          height: this.state.width * 0.3,
        }
        const player1 = {
            
        }
        return(
            <div>
                &nbsp;
                <div className="section1" style={{ width: this.state.width * 0.5 }}>
                    <SpotifyPlayer uri="spotify:album:0rjC6lV3TrTwtjjZasTDGk" size={size} view='list' theme='black' style={player1}/>
                    <img src={require('../media/debbie-cover.jpg')} width={this.state.width * 0.3} alt='debbie-cover' />
                </div>
                &nbsp;
                <div className="section1" style={{ width: this.state.width * 0.5 }}>
                    <img src={require('../media/hummingbird.jpg')} width={this.state.width * 0.3} alt='debbie-cover' />
                    <SpotifyPlayer uri="spotify:album:1bWHCKlnP8NpvevdPo1rKF" size={size} view='list' theme='black' style={player1}/>
                </div>
            </div>
        );
    }
}

export default Listen;