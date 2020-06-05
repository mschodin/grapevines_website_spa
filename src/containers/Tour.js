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

      handleClick() {
          window.open("https://www.instagram.com/thegrapevinesband/", '_blank');
      }

    render(){
        const center1 = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'grey'
        }
        const center2 = {
            width: this.state.width * 0.4,
            height: '60px',
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'lightgrey'
        }
        return(
            <div>
                <h1>TOURTOURTOUR</h1>
                <div className="shows">
                    <div style={center1}>
                        <Show date="August 6, 2020" name="Gabe's" location="Iowa City, Iowa" handle={this.handleClick} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                    <div style={center2}>
                        <Show date="August 20, 2020" name="Blue Moose" location="Iowa City, Iowa" handle={this.handleClick} right={(this.state.width - (this.state.width * 0.4))/2 - 20} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;