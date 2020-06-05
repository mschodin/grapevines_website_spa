import React, { Component } from 'react';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './side-nav.css';
import Home from './containers/Home.js';
import Tour from './containers/Tour.js';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      size: 'small'
    };
  }

  toggleSidebar = () => {
    if (this.state.size === 'small') {
      this.setState({
        size: 'big'
      });
    }
    else {
      this.setState({
        size: 'small'
      });
    }
  }

  render() {
    const navIcon = {
      width: '40px',
      height: '40px',
      marginTop: '5px',
      color: 'white'
    }
    return (
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
              onToggle={() => {
                this.toggleSidebar();
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="">
                  <NavIcon>
                    <img src={require('./media/home.png')} style={navIcon}/>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.75em' }}>
                    Home
                  </NavText>
                </NavItem>
                <NavItem eventKey="tour">
                  <NavIcon>
                    <img src={require('./media/next.png')} style={navIcon}/>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.75em' }}>
                    Tour
                  </NavText>
                </NavItem>
                <NavItem eventKey="listen">
                  <NavIcon>
                    <img src={require('./media/volume.png')} style={navIcon}/>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.75em' }}>
                    Listen
                  </NavText>
                </NavItem>
                <NavItem eventKey="media">
                  <NavIcon>
                    <img src={require('./media/photo-camera.png')} style={navIcon}/>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.75em' }}>
                    Media
                  </NavText>
                </NavItem>
                <NavItem eventKey="contact">
                  <NavIcon>
                    <img src={require('./media/email.png')} style={navIcon}/>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.75em' }}>
                    Contact
                  </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>

            <div className={this.state.size}>
              <Switch>
                <Route path="/" exact component={props => <Home />} />
                <Route path="/tour" component={props => <Tour />} />
              </Switch>
            </div>
          </React.Fragment>
        )} />
      </Router>
    );
  }
}
