import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <img src="/path/to/cart-icon.png" alt="Cart" />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
};

export default CartWidget;
