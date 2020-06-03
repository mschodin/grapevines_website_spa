import React, { Component } from 'react';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './side-nav.css';
import Home from './containers/Home.js';
import Tour from './containers/Tour.js';
import Page from './containers/Page.js';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      size: 'small'
    };
  }

  handleChange = (e) => {
    // if(e === "home"){
    //   this.setState({
    //     value: <Home />
    //   });
    // }
    // else if(e === "tour"){
    //   this.setState({
    //     value: <Tour />
    //   });
    // }

  };

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
                  <img src="https://img.icons8.com/ios/50/000000/home-page.png"/>
                    {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
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
