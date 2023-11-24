import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef LinkNavProps
 * 
 * @property {string} 
 * /

/** 
 * @param {LinkNavProps} param0 
 * 
 * @returns
*/

const LinkNav = ({ nameLink }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#!">
        {nameLink}
      </a>
    </li>
  );
};

LinkNav.propTypes = {
  nameLink: PropTypes.string.isRequired,
};

export default LinkNav;
