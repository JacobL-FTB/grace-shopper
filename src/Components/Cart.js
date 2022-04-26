import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProductById, RemoveProductFromCart } from '../api';
import { getProductsFromCart } from '../api';

const Cart = ({}) => {
  const [error, setError] = useState('');
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const history = useNavigate();
  const token = localStorage.getItem('token');

  const fetchProductObjects = async (cart) => {
    const productsArr = [];
    for (const product of cart.products) {
      const response = await fetchProductById(product.productId);
      productsArr.push(response[0]);
    }
    setProducts(productsArr);
  };

  const RemoveFromCart = async (id) => {
    console.log(products);
    const newarr = products.filter((product) => {
      if (product.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setProducts(newarr);
    console.log('1');
    if (!token) {
      localStorage.setItem('products', JSON.stringify(newarr));
    } else {
      const remove = await RemoveProductFromCart(id);
      console.log(remove);
    }
  };

  useEffect(() => {
    async function getData() {
      if (!token) {
        const lsproducts = JSON.parse(localStorage.getItem('products'));
        setProducts(lsproducts);
        return;
      }
      const cart = await getProductsFromCart();
      if (cart) {
        setCart(cart);
        await fetchProductObjects(cart);
      }
    }
    getData();
  }, []);
  console.log(cart);
  return (
    <>
      <h2>Your Cart:</h2>
      <div className="AllProducts">
        {token ? (
          products[0] ? (
            products.map((product) => {
              const [cartproduct] = cart.products.filter((cartproduct) => {
                if (product.id === cartproduct.productId) {
                  return true;
                }
              });
              console.log(cartproduct);
              return cartproduct ? (
                <div key={product.id}>
                  <h2>{product.title}</h2>
                  <h3>{product.description}</h3>
                  <h3>Price: ${cartproduct.price}</h3>
                  <h3>Count: {cartproduct.count}</h3>
                  <img src={product.imgURL}></img>
                  <button onClick={() => RemoveFromCart(product.id)}>
                    Remove from cart
                  </button>
                </div>
              ) : (
                <> </>
              );
            })
          ) : (
            <h2>There are no products in your cart</h2>
          )
        ) : products[0] ? (
          products.map((product) => {
            return (
              <div key={product.productId}>
                <h2>{product.title}</h2>
                <h3>{product.description}</h3>
                <h3>Price: ${product.price}</h3>
                <h3>Count: {product.count}</h3>
                <img src={product.imgURL}></img>
                <button onClick={() => RemoveFromCart(product.id)}>
                  Remove from cart
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <h2>There are no products in your cart</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
