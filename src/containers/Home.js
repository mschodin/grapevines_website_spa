import React, { Component } from "react";
import './Home.css';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = { size: '32px' }
    }

    updateMargin = () => {
        this.setState({
            size: '300px'
        });
    }

    render(){
        let styles = {
            // marginLeft: this.props.margin
            marginLeft: this.state.size
        }
        return(
            <div style={styles}>
                <h1>You are home</h1>
            </div>
        );
    }
}

export default Home;