import React from "react";
import {Link} from "react-router-dom";
import NavbarFilter from "../NavbarFilter/NavbarFilter";
import VideoListing from "./VideoListing";
import "./VideosPage.scss";

const VideosPage = () => {
	return (
		<div className='videopage-container'>
			<label className='show-only-mobile-heading'>Namaste</label>
			<NavbarFilter />
			<VideoListing />
		</div>
	);
};

export default VideosPage;
