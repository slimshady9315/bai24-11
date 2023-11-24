import React from "react";
import DropMenuItem from "./DropMenuItem";

const DropdownMenu = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Shop
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropMenuItem />
        <DropMenuItem />
        <DropMenuItem />
        <DropMenuItem />
        <DropMenuItem />
      </ul>
    </li>
  );
};

export default DropdownMenu;
