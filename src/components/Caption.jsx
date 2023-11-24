import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef CaptionProps
 * 
 * @property {string}
 * 
 */

/**
 * 
 * @param {CaptionProps} caption 
 * @returns 
 */

const Caption = ({caption}) => {
  return <p className="lead fw-normal text-white-50 mb-0">{caption}</p>;
};

Caption.propTypes = {
    caption: PropTypes.string.isRequired,
};

export default Caption;
