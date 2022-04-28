import React, {useEffect} from "react";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {ToastContainer, toast} from "react-toastify";
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
	PlaylistVideoListing,
	ProfileListing,
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
			<ToastContainer />
			<Routes>
				<Route path='/' element={<VideosPage />} />
				<Route path='/video/:videoId' element={<SingleListing />} />
				<Route
					path='/watchlater'
					element={
						<PrivateRoute>
							<WatchLater />
						</PrivateRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route
					path='/liked'
					element={
						<PrivateRoute>
							<LikevideoListing />
						</PrivateRoute>
					}
				/>
				<Route
					path='/history'
					element={
						<PrivateRoute>
							<HistoryVideoListing />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<PrivateRoute>
							<ProfileListing />
						</PrivateRoute>
					}
				/>
				<Route
					path='/playlist'
					element={
						<PrivateRoute>
							<PlaylistVideoListing />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
