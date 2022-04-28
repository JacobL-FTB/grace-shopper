import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// const linkStyle = {
// color: "white",
// margin: "10px",
// fontSize: "20px",
// display: "inline-block",
// marginRight: "1em",

// textDecoration: "none",
//

const navLinkStyles = ({ isActive }) => {
	return {
		fontWeight: isActive ? "bold" : "normal",
		// textDecoration: isActive ? "none " : "underline",
		margin: "7px",
		fontSize: "20px",
		display: "inline-block",
		marginRight: "1em",
		textDecoration: "none",
	};
};

const Navbar = ({ admin, setAdmin, userdata, setToken, setUserdata }) => {
	// console.log("navbar", admin);
	// console.log("userdata", userdata);
	return (
		<>
			<div className="heading">
				<div className="horizontal-nav1">
					<span className="prj-name">Grace Shopper </span>

					<span className="authors"> J. E. C. </span>
				</div>

				<div className="horizontal-nav2">
					<NavLink to="/" style={navLinkStyles}>
						HOME
					</NavLink>

					<NavLink to="/products" style={navLinkStyles}>
						SHOP ALL
					</NavLink>

					<NavLink to="/cart" style={navLinkStyles}>
						CART
					</NavLink>

					{!userdata && (
						<NavLink to="/register" style={navLinkStyles}>
							REGISTER
						</NavLink>
					)}

					{!userdata && (
						<NavLink to="/login" style={navLinkStyles}>
							LOGIN
						</NavLink>
					)}

					{userdata && (
						<NavLink
							to="/"
							style={navLinkStyles}
							onClick={() => {
								setToken("");
								setUserdata(null);
								setAdmin(false);
								localStorage.removeItem("token");
							}}
						>
							LOG OUT
						</NavLink>
					)}

					{admin && (
						<NavLink to="/admin" style={navLinkStyles}>
							ADMIN
						</NavLink>
					)}
				</div>

				<div className="horizontal-nav3">
					{userdata ? <span>Hello {userdata.username} </span> : null}
				</div>
			</div>
		</>
	);
};

export default Navbar;
