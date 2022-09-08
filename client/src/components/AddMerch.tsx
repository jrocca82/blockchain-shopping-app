import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Card,
	CardHeader,
	CardContent,
	Button,
	TextField,
} from "@mui/material";

const AddMerchandise = () => {
	const [itemName, setItemName] = useState<string>("");
	const [itemDesc, setItemDesc] = useState<string>("");
	const [itemPrice, setItemPrice] = useState<string>("");
	const merch = {
		itemName: itemName,
		itemDesc: itemDesc,
		itemPrice: itemPrice,
	};

	const navigate = useNavigate();

	const handleNewItem = (event: any) => {
		// this.setState({
		//     [event.target.id]: event.target.value
		// })
	};

	const addListing = () => {
		//actions.merchandise.addListing(merch);
		navigate("/");
	};

	return (
		<div>
			<Card>
				<CardHeader
					title="List new goods/services for sale"
					subtitle="Got something to sell? List it here!"
				/>
				<CardContent>
					<TextField
						helperText="What are you offering?"
						label="Name of Goods/Service"
						id="itemName"
						value={itemName}
						onChange={handleNewItem}
					/>
					<br />
					<TextField
						helperText="Description of goods or services being offered."
						label="Description"
						multiline={true}
						id="itemDesc"
						value={itemDesc}
						onChange={handleNewItem}
					/>
					<br />
					<TextField
						label="Price (in Ether)"
						helperText="0"
						id="itemPrice"
						value={itemPrice}
						onChange={handleNewItem}
					/>
					<br />
					<Button variant="text" onClick={addListing}>
						Add Listing
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default AddMerchandise;
