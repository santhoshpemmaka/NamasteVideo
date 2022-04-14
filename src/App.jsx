import React, {useEffect} from "react";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import Footer from "./components/Footer/Footer";
import {VideosPage} from "./components/Videos/VideoListing";
import {SingleListing} from "./components/Videos/SingleListing";
import {useData} from "./context/VideoContext";
import {getVideosServer} from "./utils/server-request";
function App() {
	const {state, dispatch} = useData();
	useEffect(() => {
		getVideosServer(dispatch);
	}, []);
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<VideosPage />} />
				<Route path='/video/:videoId' element={<SingleListing />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
