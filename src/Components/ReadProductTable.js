import React from "react";

const ReadProductTable = ({ product, handleEditClick, handleDeleteClick }) => {
	return (
		<>
			<tr>
				<td> {product.title} </td>
				<td> {product.price} </td>
				<td> {product.category} </td>
				<td> {product.description} </td>
				<td> {product.imgURL} </td>
				<td> {product.inventory} </td>

				<td>
					<button
						style={{ color: "green", margin: 10, fontSize: 18 }}
						type="button"
						onClick={(event) => handleEditClick(event, product)}
					>
						Edit
					</button>

					<button
						style={{ color: "red", marginLeft: 10, fontSize: 18 }}
						type="button"
						onClick={(event) => handleDeleteClick(product.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default ReadProductTable;
