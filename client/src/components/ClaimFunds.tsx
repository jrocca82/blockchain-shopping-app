import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
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
