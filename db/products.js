<<<<<<< HEAD
const { client } = require(".");

const createProduct = async ({
	title,
	price,
	category,
	description,
	inventory,
	imgURL,
}) => {
	try {
		const { rows: newProduct } = await client.query(
			`
      INSERT INTO products(title, price, category, description, inventory, "imgURL")
      VALUES ($1, $2, $3, $4, $5,$6)
      RETURNING *;
    `,
			[title, price, category.toLowerCase(), description, inventory, imgURL]
		);
		return newProduct;
	} catch (error) {
		console.error("here is the product error", error);
		throw error;
	}
};

const getProducts = async () => {
	try {
		const { rows: products } = await client.query(`
      SELECT * FROM products;
    `);
		return products;
	} catch (error) {
		throw error;
	}
};

const getProductById = async (id) => {
	try {
		const { rows: product } = await client.query(
			`
      SELECT * FROM products
      WHERE id = $1
    `,
			[id]
		);
		return product;
	} catch (error) {
		throw error;
	}
};

const getProductByCategory = async (category) => {
	try {
		const { rows: product } = await client.query(
			`
      SELECT * FROM products
      WHERE category = $1
    `,
			[category]
		);
		return product;
	} catch (error) {
		throw error;
	}
};

const editProduct = async (
	id,
	title,
	price,
	category,
	description,
	inventory,
	imgURL
) => {
	try {
		if (title) {
			client.query(
				`
=======
const { client } = require('.');

const createProduct = async ({
  title,
  price,
  category,
  description,
  inventory,
  imgURL,
}) => {
  try {
    const { rows: newProduct } = await client.query(
      `
      INSERT INTO products(title, price, category, description, inventory, "imgURL")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `,
      [title, price, category.toLowerCase(), description, inventory, imgURL]
    );
    return newProduct;
  } catch (error) {
    console.error('here is the product error', error);
    throw error;
  }
};

const getProducts = async () => {
  try {
    const { rows: products } = await client.query(`
      SELECT * FROM products;
    `);
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const { rows: product } = await client.query(
      `
      SELECT * FROM products
      WHERE id = $1
    `,
      [id]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

const getProductByCategory = async (category) => {
  try {
    const { rows: product } = await client.query(
      `
      SELECT * FROM products
      WHERE category = $1
    `,
      [category]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

const editProduct = async (
  id,
  title,
  price,
  category,
  description,
  inventory,
  imgURL
) => {
  try {
    if (title) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
        UPDATE products
        SET title = $1
        WHERE id = $2;
      `,
<<<<<<< HEAD
				[title, id]
			);
		}
		if (price) {
			client.query(
				`
=======
        [title, id]
      );
    }
    if (price) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      UPDATE products
      SET price = $1
      WHERE id = $2;
    `,
<<<<<<< HEAD
				[price, id]
			);
		}
		if (category) {
			client.query(
				`
=======
        [price, id]
      );
    }
    if (category) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      UPDATE products
      SET category = $1
      WHERE id = $2;
    `,
<<<<<<< HEAD
				[category, id]
			);
		}
		if (description) {
			client.query(
				`
=======
        [category, id]
      );
    }
    if (description) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      UPDATE products
      SET description = $1
      WHERE id = $2;
    `,
<<<<<<< HEAD
				[description, id]
			);
		}
		if (inventory) {
			client.query(
				`
=======
        [description, id]
      );
    }
    if (inventory) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      UPDATE products
      SET inventory = $1
      WHERE id = $2;
    `,
<<<<<<< HEAD
				[inventory, id]
			);
		}
		if (imgURL) {
			client.query(
				`
=======
        [inventory, id]
      );
    }
    if (imgURL) {
      client.query(
        `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      UPDATE products
      SET "imgURL" = $1
      WHERE id = $2;
      `,
<<<<<<< HEAD
				[imgURL, id]
			);
		}
		const { rows: product } = await client.query(
			`
      SELECT * FROM products
      WHERE id = $1
    `,
			[id]
		);
		return product;
	} catch (error) {
		throw error;
	}
};

const destroyProduct = async (id) => {
	try {
		const {
			rows: [product],
		} = await client.query(
			`
      DELETE FROM products
      WHERE id = $1;
    `,
			[id]
		);
		return product;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getProducts,
	createProduct,
	getProductById,
	getProductByCategory,
	editProduct,
	destroyProduct,
=======
        [imgURL, id]
      );
    }
    const { rows: product } = await client.query(
      `
      SELECT * FROM products
      WHERE id = $1
    `,
      [id]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

const destroyProduct = async (id) => {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      DELETE FROM products
      WHERE id = $1;
    `,
      [id]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  getProductByCategory,
  editProduct,
  destroyProduct,
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
};
