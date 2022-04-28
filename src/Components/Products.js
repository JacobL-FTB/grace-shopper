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
};
export default Products;
