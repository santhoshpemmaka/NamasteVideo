import React from "react";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import WatchLaterVideo from "./WatchLaterVideo";
import "./WatchLater.scss";
import {useData} from "../../context/VideoContext";
import {Link} from "react-router-dom";

const WatchLater = () => {
	const {state, dispatch} = useData();
	const watchVideos =
		state.videos && state.videos.filter((video) => video.isInWatchLater);

	return (
		<div className='watchlater-container'>
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
		</div>
	);
};

export default WatchLater;
