import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ProductImgProps
 *
 * @property {string}
 *
 */

/**
 *
 * @param {string} props
 * @returns
 */

const ProductImg = ({ src, brand }) => {
  return <img className="card-img-top" src={src} alt={brand} />;
};

ProductImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImg;
