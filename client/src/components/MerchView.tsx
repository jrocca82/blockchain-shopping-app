import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { blue, indigo } from "@mui/material/colors";
import { Card, CardHeader, CardContent, Fab, Chip, ToggleButton } from "@mui/material";
import { MerchType } from "../types/MerchType";
import AddIcon from '@mui/icons-material/Add';

const toggleStyle = {
	block: {
		maxWidth: 250,
	},
	toggle: {
		marginBottom: 16,
	},
};

const blueShade = blue[300];
const indigoShade = indigo[900];

type MerchViewProps = {
	getAvailableItems: () => {};
	merchandise: MerchType[];
};

const MerchandiseView = ({
	getAvailableItems,
	merchandise,
}: MerchViewProps) => {
	// useEffect(() => {
	// 	getAvailableItems();
	// });

	const buyItem = () => {
		// add code to buy items from the Marketplace here
	};

	const addMerchandise = () => {};

	return (
		<div>
			{merchandise.map((merch) => {
				return (
					<Card>
						<CardHeader title={merch.itemName} />
						<CardContent>
							{merch.itemDesc}
							<Chip
								color={"primary"}
								onClick={buyItem}
								label={
									<>
										<Avatar
											sx={{
												width: 56,
												height: 56,
												color: blueShade,
												backgroundColor: indigoShade,
											}}
										>
											{merch.itemSold === true ? "Sold" : "Buy"}
										</Avatar>
										{`${merch.itemPrice} ETH`}
									</>
								}
							/>
							<div style={toggleStyle.block}>
								<ToggleButton
								value={"Shipped"}
									disabled={!merch.itemSold}
								/>
								<ToggleButton value="Received" disabled={!merch.itemShipped} />
							</div>
						</CardContent>
					</Card>
				);
			})}
			<Fab
				onClick={addMerchandise}
				style={{
					margin: 0,
					top: "auto",
					right: 20,
					bottom: 20,
					left: "auto",
					position: "fixed",
				}}
			>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default MerchandiseView;
