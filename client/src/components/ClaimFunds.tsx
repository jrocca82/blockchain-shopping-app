import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

const ClaimFunds = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	//This instead of "history" prop
	//const navigate = useNavigate();

	// componentWillReceiveProps(nextProps) {
	//     if (nextProps.merchandise.transaction !== this.props.merchandise.transaction) {
	//         this.setState({
	//             message: nextProps.merchandise.transaction,
	//             open: true
	//         })
	//     }
	// }

	const claimFunds = () => {};

	return (
		<div>
			<Button variant="text" onClick={claimFunds}>
				Claim Funds
			</Button>
			<Snackbar message={message} open={open} />
		</div>
	);
};

export default ClaimFunds;
