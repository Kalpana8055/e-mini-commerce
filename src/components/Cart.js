import React from "react";

function Cart({ cart, updateQty }) {
  const totalItems = cart.reduce((a, b) => a + b.qty, 0);
  const totalPrice = cart.reduce((a, b) => a + b.qty * b.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <input
            type="number"
            min="0"
            max={item.stock}
            value={item.qty}
            onChange={e => updateQty(item.id, Number(e.target.value))}
          />
        </div>
      ))}

      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
