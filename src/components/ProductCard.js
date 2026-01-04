import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className={`card ${product.stock === 0 ? "disabled" : ""}`}>
      <img
        src={product.image}
        alt={product.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://via.placeholder.com/300x300?text=No+Image";
        }}
      />

      <h4>{product.title}</h4>

      <p className="price">₹ {product.price}</p>

      <p className="category">{product.category}</p>

      <p className={product.stock === 0 ? "out" : "in"}>
        {product.stock === 0 ? "Out of Stock" : "In Stock"}
      </p>

      <button
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        {product.stock === 0 ? "Unavailable" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;

