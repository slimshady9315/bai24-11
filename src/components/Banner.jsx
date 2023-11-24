import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef BannerProps
 *
 * @property {string}
 *
 */

/**
 *
 * @param {BannerProps} banner
 * @returns
 */

const Banner = ({banner}) => {
  return <h1 className="display-4 fw-bolder">{banner}</h1>;
};

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
};

export default Banner;
