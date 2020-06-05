import React, { Component } from "react";
import './Home.css';

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
        return(
            <div>
                &nbsp;
                <img src={require('../media/Grapevines-logo-cropped.jpg')} width={this.state.width * 0.4} />
                &nbsp;
                <iframe width={this.state.width * 0.4} height={this.state.width * 0.4 * (9/16)} src="https://www.youtube.com/embed/kRQT1_1fWlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Home;