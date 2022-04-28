<<<<<<< HEAD
const { client } = require(".");
const bcrypt = require("bcrypt");

const createUser = async ({ email, username, password, isAdmin }) => {
	const SALT_COUNT = 10;
	const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

	try {
		const { rows: user } = await client.query(
			`
=======
const { client } = require('.');
const bcrypt = require('bcrypt');

const createUser = async ({ email, username, password, isAdmin }) => {
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const { rows: user } = await client.query(
      `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
        INSERT INTO users (email, username, password, "isAdmin")
        VALUES ($1, $2, $3, $4)
        RETURNING id, email, username;


        `,
<<<<<<< HEAD
			[email, username, hashedPassword, isAdmin]
		);

		return user;
	} catch (error) {
		throw error;
	}
};

const getAllUsers = async () => {
	try {
		const { rows: user } = await client.query(`
		  SELECT id, email, username, "isAdmin" FROM users;
		`);
		return user;
	} catch (error) {
		throw error;
	}
};

const getAllAdmin = async () => {
	try {
		const { rows: user } = await client.query(`
		  SELECT id, email, username, "isAdmin" FROM users
			WHERE "isAdmin" = true;
		`);
		return user;
	} catch (error) {
		throw error;
	}
};
const getUserByUsername = async (username) => {
	try {
		const {
			rows: [user],
		} = await client.query(
			`
=======
      [email, username, hashedPassword, isAdmin]
    );

    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const { rows: user } = await client.query(`
      SELECT id, email, username, "isAdmin" FROM users;
    `);

    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
      SELECT * FROM users
      WHERE username = $1;

    `,
<<<<<<< HEAD
			[username]
		);
		return user;
	} catch (error) {
		throw error;
	}
};

const getUser = async ({ username, password }) => {
	try {
		const user = await getUserByUsername(username);
		if (!user) {
			return;
		}
		const hashedPassword = user.password;
		const passwordMatch = await bcrypt.compare(password, hashedPassword);
		console.log(passwordMatch);
		if (passwordMatch) {
			delete user.password;
			return user;
		}
	} catch (error) {
		throw error;
	}
};

const getUserByEmail = async (email) => {
	try {
		const {
			rows: [user],
		} = await client.query(
			`
      SELECT * FROM users
      WHERE email = $1;
    `,
			[email]
		);
		return user;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createUser,
	getAllUsers,
	getUserByUsername,
	getUser,
	getUserByEmail,
	getAllAdmin,
=======
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getUser = async ({ username, password }) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return;
    }

    const hashedPassword = user.password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    console.log(passwordMatch);
    if (passwordMatch) {
      delete user.password;
      return user;
    }
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE email = $1;
    `,
      [email]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  getUser,
  getUserByEmail,
>>>>>>> 19e97630e8989212770d504f6aacd9a097cd5916
};
