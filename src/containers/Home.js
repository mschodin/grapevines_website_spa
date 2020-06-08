import React, { Component } from "react";
import './Home.css';
import { SocialIcon } from 'react-social-icons';

class Home extends Component {

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
      const icons = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
      const iconsChild = {
        margin: '5px'
      }
        return(
            <div>
                {/* &nbsp; */}
                <img src={require('../media/Grapevines-logo-cropped.jpg')} width={this.state.width * 0.4} alt='logo' />
                &nbsp;
                <iframe title='SofarVideo' width={this.state.width * 0.4} height={this.state.width * 0.4 * (9/16)} src="https://www.youtube.com/embed/kRQT1_1fWlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                &nbsp;
                <div style={icons}>
                  <SocialIcon url="https://www.instagram.com/thegrapevinesband/" style={iconsChild}/>
                  <SocialIcon url="https://open.spotify.com/artist/0BnrW8h4tlt3zu0yEaew9Y" style={iconsChild}/>
                  <SocialIcon url="https://www.facebook.com/thegrapevineguy/" style={iconsChild}/>
                  <SocialIcon url="https://twitter.com/thegrapevines_?lang=en" style={iconsChild}/>
                  <SocialIcon url="https://thegrapevines.bandcamp.com/" style={iconsChild}/>
                </div>
            </div>
        );
    }
}

export default Home;