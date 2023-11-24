import React from "react";
import PropTypes from "prop-types";
import LinkNav from "./LinkNav";
import DropdownMenu from "./DropdownMenu";
import Cart from "./Cart";
import Logo from "./Logo";

// totalPrice
// link nav

const Navication = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <LinkNav nameLink="Home" />
            <LinkNav nameLink="Product" />
            <DropdownMenu />
          </ul>
          <Cart totalPrice={2000} />
        </div>
      </div>
    </nav>
  );
};

export default Navication;
