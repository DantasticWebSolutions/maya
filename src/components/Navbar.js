import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Menu from './Menu';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	// let className = 'menuContainer';
	const showMenu = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<div className="navbar">
				{/* MENU */}

				<div className="menu" onClick={showMenu}>
					<div className={`line line1 ${toggle ? 'open' : 'close'}`}></div>
					<div className={`line line2 ${toggle ? 'open' : 'close'}`}></div>
				</div>

				{/* LOGO */}
				<Link to="/">
					<div className="logo">EWE</div>
				</Link>

				{/* SHARE */}
				<div className="share">Share</div>
			</div>
			<div className={`menuContainer ${toggle ? 'open' : 'close'}`}>
				<Menu onClick={showMenu} />
			</div>
		</>
	);
};

export default Navbar;
