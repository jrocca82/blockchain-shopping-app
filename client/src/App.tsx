
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MerchandiseView from "./components/MerchView";
import AddMerchandise from "./components/AddMerch";
import ClaimFunds from "./components/ClaimFunds";

/*
 * Import global styles into entire app
 */
import "./components/styles/app.scss";

const Main = () => {
	return (
		<div>
			<HashRouter>
				<div>
					<Header />
					<div className="container">
						<div id="main">
							<Routes>
								<Route
									path="/"
									element={
										<MerchandiseView
											getAvailableItems={() => () => {}}
											merchandise={[]}
										/>
									}
								/>
								<Route path="/add" element={<AddMerchandise />} />
								<Route path="/funds" element={<ClaimFunds />} />
							</Routes>
						</div>
					</div>
				</div>
			</HashRouter>
		</div>
		//</MuiThemeProvider>
	);
};

export default Main;
