export const BASE_URL = "http://localhost:3001/api";

export const fetchProducts = async () => {
	try {
		const response = await fetch(`${BASE_URL}/products`);

		const info = await response.json();
		// console.log("info", info.products);
		return info.products;
	} catch (error) {
		console.error(`Error retrieving products ${error}`);
	}
};

export const fetchAdmin = async () => {
	try {
		const response = await fetch(`${BASE_URL}/user/admin`);
		const info = await response.json();
		// console.log("fetchAdmin", info.users);
		return info.users;
	} catch (error) {
		console.error(`Error retrieving admins ${error}`);
	}
};

export const register = async (email, username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				username,
				password,
			}),
		});
		const info = await response.json();

		return info;
	} catch (error) {
		console.error(`Error registering a user ${error}`);
	}
};

export const registerAdmin = async (email, username, password, isAdmin) => {
	try {
		const response = await fetch(`${BASE_URL}/user/register/admin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				username,
				password,
				isAdmin,
			}),
		});
		const info = await response.json();

		return info;
	} catch (error) {
		console.error(`Error registering a user ${error}`);
	}
};

export const login = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});

		const info = await response.json();
		// console.log("login_response", info);
		return info;
	} catch (error) {
		console.error(`Error logging in a user ${error}`);
	}
};

export const userInfo = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/user/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const info = await response.json();
		// console.log("userInfo", info);
		return info;
	} catch (error) {
		console.error(`Error retrieving user information ${error}`);
	}
};

export const addProducts = async (
	localSourcedToken,
	title,
	price,
	category,
	description,
	imgURL,
	inventory
) => {
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localSourcedToken}`,
			},

			body: JSON.stringify({
				title,
				price,
				category,
				description,
				imgURL,
				inventory,
			}),
		});
		const info = await response.json();
		return info;
	} catch (error) {
		console.error(`Error adding products ${error}`);
	}
};

//
export const updateProducts = async (
	localSourcedToken,
	id,
	title,
	price,
	category,
	description,
	imgURL,
	inventory
) => {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localSourcedToken}`,
			},
			body: JSON.stringify({
				title,
				price,
				category,
				description,
				imgURL,
				inventory,
			}),
		});
		const info = await response.json();
		return info;
	} catch (error) {
		console.error(`Error updating products ${error}`);
	}
};

export const deleteProducts = async (id, token) => {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const info = await response.json();

		return info;
	} catch (error) {
		console.error(`Error deleting a product ${error}`);
	}
};
