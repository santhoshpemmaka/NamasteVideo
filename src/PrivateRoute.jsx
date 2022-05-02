import React from "react";
import {useAuthentication} from "./context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
	const location = useLocation();
	const {
		state: {token},
	} = useAuthentication();
	return token ? (
		children
	) : (
		<Navigate state={{from: location}} to='/login' replace />
	);
};

export default PrivateRoute;
