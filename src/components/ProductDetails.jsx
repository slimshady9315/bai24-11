import React from "react";
import PropTypes from "prop-types";
import VoteStar from "./VoteStar";

/**
 * @typedef ProductDetailsProps
 *
 * @property {string,number,bool}
 */

/**
 *
 * @param {*} props
 * @returns
 */

const ProductDetails = ({ title, originalPrice, salePrice, vote }) => {
  return (
    <div className="card-body p-4">
      <div className="text-center">
        {/* Product name*/}
        <h5 className="fw-bolder">{title}</h5>
        {/* Product reviews*/}
        {vote && (
          <div className="d-flex justify-content-center small text-warning mb-2">
            <VoteStar />
            <VoteStar />
            <VoteStar />
            <VoteStar />
            <VoteStar />
          </div>
        )}
        {/* Product price*/}
        {salePrice ? (
          <>
            <span className="text-muted text-decoration-line-through">
              ${originalPrice}
            </span>
            <span>${salePrice}</span>
          </>
        ) : (
          <span>${originalPrice}</span>
        )}
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
  vote: PropTypes.bool,
};

export default ProductDetails;
