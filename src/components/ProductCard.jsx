import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";
import ProductDetails from "./ProductDetails";
import ProductActionsButton from "./ProductActionsButton";
import ProductImg from "./ProductImg";

/**
 * @typedef ProductCardProps
 *
 * @property {string,number,bool}
 */

/**
 *
 * @param {ProductCardProps} props
 * @returns
 */

const ProductCard = ({
  images,
  title,
  brand,
  price,
  discountPercentage,
  vote,
}) => {

  const randomImage = Math.floor(Math.random() * images.length)

  const firstImageSrc = images[randomImage];
  return (
    <div>
      <div className="card h-100">
        {/* Sale badge*/}
        {discountPercentage && <Tag />}
        {/* Product images*/}
        <ProductImg src={firstImageSrc} alt={brand} />
        {/* Product details*/}
        <ProductDetails
          title={title}
          originalPrice={price}
          salePrice={discountPercentage}
          vote={vote}
        />
        {/* Product actions*/}
        <ProductActionsButton />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  vote: PropTypes.bool,
};

export default ProductCard;
