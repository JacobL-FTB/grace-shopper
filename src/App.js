import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchProducts, userInfo } from "./api";

import {
	Navbar,
	Home,
	Register,
	Products,
	Cart,
	Login,
	Mens,
	Womens,
	Kids,
	Accessories,
	ShopAll,
	Admin,
	CreateAdmin,
	CreateProducts,
	ReadAdminTable,
} from "./Components";

function App() {
	const [cartIsEmpty] = useState(false);
	const [token, setToken] = useState("");
	const [userdata, setUserdata] = useState(null);
	const [products, setProducts] = useState([]);
	const [admin, setAdmin] = useState(false);
	// const [adminUsers, setAdminUsers] = useState([]);

	const fetchUser = async () => {
		// try {
		const IsToken = localStorage.getItem("token");
		if (IsToken) {
			setToken(IsToken);
			const response = await userInfo(IsToken);
			setUserdata(response);
			setAdmin(response.isAdmin);
		}
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	useEffect(() => {
		fetchUser();

		try {
			fetchProducts().then((product) => {
				setProducts(product);
			});

			// fetchAdmin().then((adminUsers) => {
			// 	// console.log("adminUsers", adminUsers);
			// 	setAdminUsers(adminUsers);
			// });
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="App">
			<Navbar
				admin={admin}
				setAdmin={setAdmin}
				setToken={setToken}
				userdata={userdata}
				setUserdata={setUserdata}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home />}
					setUserdata={setUserdata}
					userdata={userdata}
				/>

				<Route path="/products" element={<Products />}>
					<Route index element={<ShopAll products={products} />} />
					<Route path="mens" element={<Mens products={products} />} />

					<Route path="womens" element={<Womens products={products} />} />

					<Route path="kids" element={<Kids products={products} />} />

					<Route
						path="accessories"
						element={<Accessories products={products} />}
					/>
				</Route>

				<Route path="/register" element={<Register setToken={setToken} />} />

				<Route
					path="/login"
					element={
						<Login
							setToken={setToken}
							setUserdata={setUserdata}
							setAdmin={setAdmin}
						/>
					}
				/>

				<Route
					path="/cart"
					element={cartIsEmpty ? <Navigate to="/products" /> : <Cart />}
				/>

				<Route path="/admin" element={<Admin />}>
					<Route path="createAdmin" element={<CreateAdmin token={token} />} />
					<Route
						path="createProduct"
						element={
							<CreateProducts
								products={products}
								setProducts={setProducts}
								token={token}
							/>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
