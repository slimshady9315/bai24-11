import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

/**
 * @typedef ProductListProps
 *
 * @property {array} products
 */

/**
 *
 * @param {ProductListProps} props
 * @returns
 */

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        if (!ignore) setProducts(data.products);
      } catch (error) {
        if (!ignore) setError(error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Lỗi</div>;
  // }

  const productCard = products.map((product) => (
    <div key={product.id} className="col mb-5">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>lỗi</div>
      ) : (
        <>
          <ProductCard {...product} />
        </>
      )}
    </div>
  ));

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productCard}
        </div>
      </div>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
