import React from "react";
import NavbarFilter from "../NavbarFilter/NavbarFilter";
import SingleVideo from "./SingleVideo";
import "./SingleListing.scss";

const SingleListing = () => {
	return (
		<div className='singlevideo-container'>
			<NavbarFilter />
			<SingleVideo />
		</div>
	);
};

export default SingleListing;
