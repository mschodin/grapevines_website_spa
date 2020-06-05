import React, { Component } from "react";
import Show from './Show.js';

class Tour extends Component {

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

      show1() {
          window.open("https://www.instagram.com/thegrapevinesband/", '_blank');
      }

      show2(){
        window.open("https://open.spotify.com/artist/0BnrW8h4tlt3zu0yEaew9Y", '_blank');
      }

    render(){
        const firstshow = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'grey',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px'
        }
        const lighter = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'lightgrey'
        }
        const darker = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'grey',
        }
        const lastshow = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'lightgrey',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px'
        }
        return(
            <div>
                <h1>TOURTOURTOUR</h1>
                <div className="shows">
                    <div style={firstshow}>
                        <Show date="August 6, 2020" name="Gabe's" location="Iowa City, Iowa" handle={this.show1} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                    <div style={lighter}>
                        <Show date="August 20, 2020" name="Blue Moose" location="Iowa City, Iowa" handle={this.show2} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                    <div style={darker}>
                        <Show date="September 15, 2020" name="Silvi's" location="Chicago, IL" handle={this.show1} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                    <div style={lastshow}>
                        <Show date="September 30, 2020" name="The Trap Kitchen" location="Iowa City, Iowa" handle={this.show2} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;