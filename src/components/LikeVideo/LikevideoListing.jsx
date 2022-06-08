import React from "react";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import LikeVideo from "./LikeVideo";
import "./LikevideoListing.scss";
import {useData} from "../../context/VideoContext";
import {Link} from "react-router-dom";
import {useAuthentication} from "../../context/AuthContext";

const LikevideoListing = () => {
	const {state, dispatch} = useData();
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	const likedVideos =
		state.videos && state.videos.filter((video) => video.isInLiked);

	return (
		<div className='likevideo-container'>
			<label className='show-only-heading'>Namaste</label>
			<NavbarFilter />
			<div className='likevideo'>
				<div className='likevideo-heading'>
					<h2>Liked Videos</h2>
					<label>({likedVideos && likedVideos.length} videos)</label>
				</div>
				{likedVideos.length ? (
					<div className='video-grid-layout'>
						{likedVideos.length > 0 &&
							likedVideos.map((likeVideo) => (
								<LikeVideo likeVideo={likeVideo} key={likeVideo._id} />
							))}
					</div>
				) : (
					<div className='empty-conatiner'>
						<label>Looks like you haven't liked videos anything yet. </label>
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

export default LikevideoListing;
