import React from "react";
import NavbarFilter from "../NavbarFilter/NavbarFilter";
import SingleVideo from "./SingleVideo";
import "./SingleListing.scss";
import {useAuthentication} from "../../../context/AuthContext";
import {Link} from "react-router-dom";

const SingleListing = () => {
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();
	return (
		<div className='singlevideo-container'>
			<label className='show-only-mobile-heading'>Namaste</label>
			<NavbarFilter />
			<SingleVideo />
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

export default SingleListing;
