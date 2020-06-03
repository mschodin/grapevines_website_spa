import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './side-nav.css';
import Home from './Home';

function App() {
  return (
    <SideNav
    onSelect={(selected) => {
        // Add your code here
        if(selected === 'home'){
            
        }
        else if (selected === 'charts'){

        }
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
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  );
}

export default App;
