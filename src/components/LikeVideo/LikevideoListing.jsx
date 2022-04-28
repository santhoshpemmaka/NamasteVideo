import React from "react";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import LikeVideo from "./LikeVideo";
import "./LikevideoListing.scss";
import {useData} from "../../context/VideoContext";
import {Link} from "react-router-dom";

const LikevideoListing = () => {
	const {state, dispatch} = useData();
	const likedVideos =
		state.videos && state.videos.filter((video) => video.isInLiked);

	return (
		<div className='likevideo-container'>
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
		</div>
	);
};

export default LikevideoListing;
