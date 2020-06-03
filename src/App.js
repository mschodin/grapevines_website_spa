import React, { Component } from 'react';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import './side-nav.css';
import Home from './containers/Home.js';
import Tour from './containers/Tour.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      margin: '32px'
    };
  }

  handleChange = (e) => {
    if(e === "home"){
      this.setState({
        value: <Home margin={this.state.margin} />
      });
    }
    else if(e === "tour"){
      this.setState({
        value: <Tour />
      });
    }

  };

  toggleSidebar = () => {
    if(this.state.margin === "32px"){
      this.setState({
        margin: "300px"
      });
    }
    else {
      this.setState({
        margin: "32px"
      });
    }
    this.state.value.setState({ size: "300px"});
  }

  render(){
    return (

          <React.Fragment>
            
            <SideNav
              onSelect={(selected) => {
                this.handleChange(selected);
              }}
              onToggle={() => {
                this.toggleSidebar();
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                      <NavIcon>
                          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                          Home
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="tour">
                      <NavIcon>
                          <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                          Charts
                      </NavText>
                  </NavItem>
              </SideNav.Nav>
            </SideNav>
            
            {this.state.value}
          </React.Fragment>
    );
  }
}
