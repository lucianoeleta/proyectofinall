import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from './config/firebase';
import { CartContext } from './context/CartContext';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
