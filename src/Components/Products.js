<<<<<<< HEAD
import { NavLink, Outlet } from "react-router-dom";

// const LinkStyles = {
// 	// color: "white",
// 	margin: "10px",
// 	fontSize: "15px",
// 	display: "inline-block",
// 	marginRight: ".3em",
// 	textDecoration: "none",
// };

const navLinkStyles = ({ isActive }) => {
	return {
		fontWeight: isActive ? "bold" : "normal",
		// textDecoration: isActive ? "none " : "underline",
		margin: "7px",
		fontSize: "15px",
		display: "inline-block",
		marginRight: "1.5em",
		textDecoration: "none",
	};
};

const Products = () => {
	return (
		<>
			<nav className="nav-products">
				<NavLink to="mens" style={navLinkStyles}>
					MENS
				</NavLink>

				<NavLink to="womens" style={navLinkStyles}>
					WOMENS
				</NavLink>

				<NavLink to="kids" style={navLinkStyles}>
					KIDS
				</NavLink>

				<NavLink to="accessories" style={navLinkStyles}>
					ACCESSORIES
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
=======
const { useNavigate } = require('react-router-dom');
import { NotificationManager } from 'react-notifications';

import { addToCart } from '../api';
import './css/Products.css';
import MainCategories from './MainCategories';

const Products = ({ products, token }) => {
  const navigate = useNavigate();

  return (
    <div className="products_main">
      <MainCategories />
      <div className="products_container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div
                className="products_content"
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <h1>{product.title}</h1>
                <img src={product.imgURL} />
                <p>${product.price}</p>
              </div>
              <button
                onClick={(e) => {
                  // const response = addToCart(product.price, product.id, 1);

                  const response = addToCart(
                    token,
                    product.price,
                    product.id,
                    1,
                    product.imgURL,
                    product.title,
                    product.description,
                    product.inventory
                  );
                  if (response) {
                    NotificationManager.success(
                      'Added 1 item(s) to cart!',
                      'Success!',
                      1500
                    );
                  }
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
};

export default Products;
