import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={increment} disabled={quantity >= stock}>+</button>
      <button onClick={() => onAdd(quantity)} disabled={stock === 0}>Add to Cart</button>
    </div>
  );
};

export default ItemCount;
