import React, {useEffect} from "react";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {
	VideosPage,
	SingleListing,
	Footer,
	Header,
	Login,
	SignUp,
	WatchLater,
	LikevideoListing,
	HistoryVideoListing,
} from "./components";
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
				<Route path='/watchlater' element={<WatchLater />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/liked' element={<LikevideoListing />} />
				<Route path='/history' element={<HistoryVideoListing />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
