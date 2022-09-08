import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const Navigation = () => {
	const [value, setValue] = React.useState<string>("/");

  const navigate = useNavigate();

	const handleChange = (_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab
						label="Ether's List"
						value={"/"}
            onClick={() => navigate("/")}
						{...a11yProps(0)}
					/>
					<Tab
						label="Claim Funds"
						value={"/funds"}
						{...a11yProps(1)}
					/>
				</Tabs>
			</Box>
		</Box>
	);
};

export default Navigation;