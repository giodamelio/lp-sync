import React from 'react';

import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="Let's Play Sync" inverse>
          <Nav left eventKey={0}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/test'>Test</Link></li>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
