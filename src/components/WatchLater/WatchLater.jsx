import React from "react";
import NavbarFilter from "../Videos/NavbarFilter/NavbarFilter";
import WatchLaterVideo from "./WatchLaterVideo";
import "./WatchLater.scss";
import {useData} from "../../context/VideoContext";

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
				<div className='video-grid-layout'>
					{watchVideos.length > 0 &&
						watchVideos.map((watchVideo) => (
							<WatchLaterVideo watchVideo={watchVideo} key={watchVideo._id} />
						))}
				</div>
				<div className='spacer-3rem'></div>
			</div>
		</div>
	);
};

export default WatchLater;
