import { NavLink, Outlet } from "react-router-dom";

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

const Admin = () => {
	return (
		<>
			<nav className="nav-admin">
				<NavLink to="createAdmin" style={navLinkStyles}>
					TEAM
				</NavLink>

				<NavLink to="createProduct" style={navLinkStyles}>
					PRODUCTS
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
};

export default Admin;
