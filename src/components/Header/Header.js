import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from "react-bulma-components/full";

class Header extends Component{
    // set active state for hamburger
  state = { active : false }

  render() {
    return(
        <div id="header">
        <Navbar fixed="top" active={this.state.active}>
        <Navbar.Brand>
            <Navbar.Item href="/">
              PhotoAlbum (Sample)
            </Navbar.Item>
            <Navbar.Burger
              active={this.state.active}
              onClick={this.handleClick}
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/user">Photo</Link>
            </Navbar.Container>
          </Navbar.Menu>
            </Navbar>
        </div>
    )
  }
    handleClick = () => { 
        const { active } = this.state;
        this.setState({ active: !active }); 
     }
}

export default Header