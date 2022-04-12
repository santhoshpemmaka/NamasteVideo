import React from "react";
import NavbarFilter from "./NavbarFilter/NavbarFilter";
import VideoListing from "./VideoListing/VideoListing";
import "./VideosPage.scss";

const VideosPage = () => {
	return (
		<div className='videopage-container'>
			<NavbarFilter />
			<VideoListing />
		</div>
	);
};

export default VideosPage;
