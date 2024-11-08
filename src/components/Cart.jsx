import React, { useContext } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '.config/firebase';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handlePurchase = async () => {
    try {
      const purchaseOrder = {
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        date: new Date(),
      };
      const docRef = await addDoc(collection(db, "orders"), purchaseOrder);
      alert(`Purchase successful! Your order ID is ${docRef.id}`);
      clearCart();
    } catch (error) {
      console.error("Error completing the purchase: ", error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <p>{item.name} - Quantity: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <p>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
          <button onClick={handlePurchase}>Confirm Purchase</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
