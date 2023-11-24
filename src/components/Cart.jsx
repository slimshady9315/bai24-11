import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef cartProps
 * 
 * @property {number} 
 * /

/** 
 * @param {cartProps} param0 
 * 
 * @returns
*/


const Cart = ({ totalPrice }) => {
  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
        <i className="bi-cart-fill me-1" />
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">{totalPrice}</span>
      </button>
    </form>
  );
};

Cart.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default Cart;
