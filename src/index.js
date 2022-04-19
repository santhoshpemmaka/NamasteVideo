import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Mock} from "./Mock";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider, AuthenticationProvider} from "./context";
import ScrollTop from "./ScrollTop";

makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthenticationProvider>
				<DataProvider>
					<ScrollTop />
					<App />
					{/* <Mock /> */}
				</DataProvider>
			</AuthenticationProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
