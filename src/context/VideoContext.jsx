import {createContext, useContext, useReducer} from "react";
import {videoReducer, initialState} from "../reducer/videoReducer";

const DataContext = createContext();

const DataProvider = ({children}) => {
	const [state, dispatch] = useReducer(videoReducer, initialState);
	return (
		<DataContext.Provider value={{state, dispatch}}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => useContext(DataContext);

export {useData, DataProvider};
