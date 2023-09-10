import React from 'react'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import checks from "../checks.png"

export default function SiteNav() {
  return (
    <>
      <Navbar expand="md" >
        <Container className='pb-5'>
          <Navbar.Brand href="/" className='BeautyShop' >Beauty Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link " to="/about">About</NavLink>
              <NavLink className="nav-link " to="/cart">Cart</NavLink>
              <NavLink className="nav-link " to="/products">Product</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img 
            src={checks}
            width="100%"
          />
      </>

  )
}
