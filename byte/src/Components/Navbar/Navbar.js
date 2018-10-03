import React from 'react';

const Navbar = () => (
<Navbar> 

<Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Byte</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Home
    </NavItem>
    <NavItem eventKey={2} href="#">
      About
    </NavItem>
    <NavItem eventKey={3} href="#">
      Meet the Team
    </NavItem>
  </Nav>
</Navbar>

);

export default NavBar;

      
      