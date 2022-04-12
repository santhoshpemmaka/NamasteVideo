import React, {useState} from "react";
import "./VideoListing.scss";
import {navFilterOptions} from "../../../database";
import ActionButtonVideocard from "./AllVideos/ActionButtonVideocard";
import AllVideos from "./AllVideos";
import AllVideosList from "./AllVideos/AllVideosList";
const VideoListing = () => {
	const [activeNav, setactiveNav] = useState("ALL");
	return (
		<div className='video-listing-container'>
			<div className='nav-filter-options'>
				{navFilterOptions &&
					navFilterOptions.map((option) => (
						<div
							key={option.label}
							className={
								activeNav === option.label
									? "nav-filter-option active"
									: "nav-filter-option"
							}>
							<label>{option.label}</label>
						</div>
					))}
			</div>
			<div className='video-listing-sortoption'>
				<i className='fas fa-sort-amount-down'></i>
				<label>Sorting Latest</label>
			</div>
			<div className='video-grid-layout'>
				{AllVideos &&
					AllVideos.map((video) => (
						<AllVideosList video={video} key={video._id} />
					))}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default VideoListing;
