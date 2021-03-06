import {createContext, useContext, useReducer} from "react";
import {authenticationReducer} from "../reducer/authenticationReducer";
import {useNavigate} from "react-router";
import {logoutTouserToastify} from "../utils/Toastify";
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
		lastName: "",
	};

	const [state, dispatch] = useReducer(authenticationReducer, initialState);

	const logoutUser = () => {
		localStorage?.removeItem("userSession");
		dispatch({type: "LOGOUT_USER"});
		logoutTouserToastify("User logout successful");
		navigation("/");
	};

	return (
		<AuthContext.Provider value={{state, dispatch, logoutUser}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthentication = () => useContext(AuthContext);
