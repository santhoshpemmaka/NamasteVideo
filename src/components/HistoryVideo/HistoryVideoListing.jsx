import React from "react";
import {useData} from "../../context/VideoContext";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import HistoryVideo from "./HistoryVideo";
import {Link} from "react-router-dom";
import "./HistoryVideoListing.scss";
import {useAuthentication} from "../../context/AuthContext";

const HistoryVideoListing = () => {
	const {state, dispatch} = useData();
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	const historyVideos =
		state.videos && state.videos.filter((video) => video.isInHistory);

	return (
		<div className='historyvideo-container'>
			<label className='show-only-heading'>Namaste</label>
			<NavbarFilter />
			<div className='historyvideo'>
				<div className='historyvideo-heading'>
					<h2>History Videos</h2>
					<label>({historyVideos && historyVideos.length} videos)</label>
				</div>
				{historyVideos.length ? (
					<div className='video-grid-layout'>
						{historyVideos.map((historyVideo) => (
							<HistoryVideo
								historyVideo={historyVideo}
								key={historyVideo._id}
							/>
						))}
					</div>
				) : (
					<div className='empty-conatiner'>
						<label>Looks like you haven't history videos anything yet. </label>
						<Link to='/'>
							<button className='empty-list-button'>Start Adding Now</button>
						</Link>
					</div>
				)}
				<div className='spacer-3rem'></div>
			</div>
			<div className='show-only-mobile'>
				<Link to='/' className='mobile-page-icon'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/liked' className='mobile-page-icon'>
					<i className='fas fa-heart'></i>
				</Link>
				<Link to='/watchlater' className='mobile-page-icon'>
					<i className='fas fa-clock'></i>
				</Link>
				<Link to='/history ' className='mobile-page-icon'>
					<i className='fas fa-history'></i>
				</Link>
				<label className='mobile-page-icon' onClick={() => logoutUser()}>
					<i className='fas fa-sign-out-alt'></i>
				</label>
			</div>
		</div>
	);
};

export default HistoryVideoListing;
