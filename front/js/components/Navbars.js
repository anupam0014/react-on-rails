/**
 * @fileOverview Navbars component.
 */

import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap';

const NavbarInstance = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/form">Entry</NavItem>
        <NavDropdown eventKey={3} title="Category" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Data Structure</MenuItem>
          <MenuItem eventKey={3.2}>Dynamic Programming</MenuItem>
          <MenuItem eventKey={3.3}>Backtracking</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Bit-wise Operations</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <Navbar.Form >
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
        <NavItem eventKey={4} href="/logout" className='logout'>Log Out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;
