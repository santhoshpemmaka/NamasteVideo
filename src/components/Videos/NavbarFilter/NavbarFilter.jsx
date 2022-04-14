import React from "react";
import "./NavbarFilter.scss";
import {navbarOptions} from "../../../database";
import {NavLink, useNavigate} from "react-router-dom";
const NavbarFilter = () => {
	return (
		<div className='navbarfilter-container'>
			{navbarOptions &&
				navbarOptions.map((option) => (
					<NavLink
						to={option.link}
						key={option.label}
						className={({isActive}) =>
							isActive ? "sidebar-options active" : "sidebar-options"
						}>
						<i className={option.icon}></i>
						<label>{option.label}</label>
					</NavLink>
				))}
		</div>
	);
};

export default NavbarFilter;
