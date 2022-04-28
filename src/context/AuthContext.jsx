import {createContext, useContext, useReducer} from "react";
import {authenticationReducer} from "../reducer/authenticationReducer";
import {useNavigate} from "react-router";

const AuthContext = createContext();

export const AuthenticationProvider = ({children}) => {
	const navigation = useNavigate();
	const {
		userName: userNameDetails,
		token: tokenDetails,
		email,
	} = JSON.parse(localStorage?.getItem("userSession")) || {
		userName: "",
		token: "",
		email: "",
	};

	const initialState = {
		token: tokenDetails,
		userName: userNameDetails,
		email: email,
	};

	const [state, dispatch] = useReducer(authenticationReducer, initialState);

	const logoutUser = () => {
		localStorage?.removeItem("userSession");
		dispatch({type: "LOGOUT_USER"});
		navigation("/");
	};

	return (
		<AuthContext.Provider value={{state, dispatch, logoutUser}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthentication = () => useContext(AuthContext);
