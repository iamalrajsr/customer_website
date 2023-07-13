import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
     <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <img src="https://thumbs.dreamstime.com/b/vector-shopping-bag-logo-icon-blue-letter-s-detailed-illustration-isolated-white-141489270.jpg" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
    <NavLink className="navbar-brand" to="#"><b>PMS</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/"><b>Home</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about"><b>About</b></NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link" to="product"><b>Products</b></NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="Becomevendor"><b>Become a Vendor</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact"><b>Contact</b></NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="Login">Login</NavLink>
        </li> */}
        {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li> */}
      </ul>
      <form className="d-flex" role="">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Cart(0)</button> */}
        {/* <button className="btn btn-outline-success ms-2" type="submit">Login</button> */}
        <NavLink to="/Login"><button type="submit"className="btn btn-outline-warning text-dark ms-2"><b>Login</b></button></NavLink>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Menu;
