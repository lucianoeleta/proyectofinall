import React from 'react';

const Item = ({ item, onAddToCart }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
