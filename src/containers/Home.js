import React, { Component } from "react";
import './Home.css';
import Page from './Page.js';

class Home extends Page {

    constructor(props){
        super(props);
        this.state = {  }
    }

    render(){
        
        return(
            <div>
                <h1>You are home</h1>
            </div>
        );
    }
}

export default Home;