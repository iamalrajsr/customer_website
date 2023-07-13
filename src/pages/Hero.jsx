import React from "react";
import { NavLink } from "react-router-dom";
import Carosal from './Carosal';
function Hero() {
  return (
    <div>
     <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to="#"><b>PMS</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/Carosal"><b>Home</b></NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link" to="/products"><b>Our Products</b></NavLink>
        </li>

              {/* <NavDropdown title="Vendor" id="navbarScrollingDropdown">
                < NavDropdown.Item to="/Rarichan"><b>Rarichans</b></NavDropdown.Item>
                <NavDropdown.Item to="/Helba"> <b>Helba</b></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"><b>Up-coming</b></NavDropdown.Item>
              </NavDropdown> */}

          <li className="nav-item">
          <NavLink className="nav-link" to="Footer"><b>Contact</b></NavLink>
        </li>
       
      </ul>
      <form className="d-flex" role="">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Cart(0)</button>
      </form>
    </div>
  </div>
</nav>
<Carosal/>
    </div>
  );
}

export default Hero;
