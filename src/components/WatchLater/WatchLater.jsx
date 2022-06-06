import React from "react";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import WatchLaterVideo from "./WatchLaterVideo";
import "./WatchLater.scss";
import {useData} from "../../context/VideoContext";
import {Link} from "react-router-dom";
import {useAuthentication} from "../../context/AuthContext";

const WatchLater = () => {
	const {state, dispatch} = useData();
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	const watchVideos =
		state.videos && state.videos.filter((video) => video.isInWatchLater);

	return (
		<div className='watchlater-container'>
			<label className='show-only-heading'>Namaste</label>
			<NavbarFilter />
			<div className='watchlist-container'>
				<div className='watchlist-heading'>
					<h2>Watch later</h2>{" "}
					<label>( {watchVideos && watchVideos.length} videos)</label>
				</div>
				{watchVideos.length ? (
					<div className='video-grid-layout'>
						{watchVideos.length > 0 &&
							watchVideos.map((watchVideo) => (
								<WatchLaterVideo watchVideo={watchVideo} key={watchVideo._id} />
							))}
					</div>
				) : (
					<div className='empty-conatiner'>
						<label>
							Looks like you haven't liked watch later videos anything yet.{" "}
						</label>
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

export default WatchLater;
