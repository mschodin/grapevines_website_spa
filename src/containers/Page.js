import React, { Component } from "react";

class Page extends React.Component {

    constructor(props){
        super(props);
        this.state = { page: 'Home' }
    }

    updateMargin = () => {
        this.setState({
            size: '300px'
        });
    }

    render(){
        return(
            <div>
                <Home />
            </div>
        );
    }
}

export default Page;