import React from 'react';
import './Navbar.css';

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
    <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Nav>
</Navbar>

);

export default NavBar;

      
      