import React, { useEffect, useState } from 'react'

import pcsLogo from '../../assets/images/pcs-logo.png'
import './index.css'
import { NavHashLink as Link } from 'react-router-hash-link'

import { items } from './content'

import './index.css'
// import { Menu, MenuItem } from '@mui/material'
// import Button from '@restart/ui/esm/Button'

function NavBar() {
	const [click, setClick] = useState(false)
	const [isActive, setIsActive] = useState(true)
	const [changeNavbar, setChangeNavbar] = useState(false)
	// const [showDropdown, setShowDropdown] = useState(false)
	// const [anchorEl, setAnchorEl] = React.useState(null)
	// const open = Boolean(anchorEl)
	// const handleClick = (event) => {
	// 	setAnchorEl(event.currentTarget)
	// }
	// const handleClose = () => {
	// 	setAnchorEl(null)
	// }

	useEffect(() => {
		changeNavbarColor()
		return () => {
			setChangeNavbar(false)
		}
	}, [])

	const changeNavbarColor = () => {
		if (window.scrollY >= 100) {
			setChangeNavbar(true)
		} else {
			setChangeNavbar(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)

	return (
		<header
			id='header'
			className={`header fixed-top col-12 ${
				changeNavbar ? 'navbar-white' : ''
			}`}>
			<div
				className='
					container-fluid container-xl
					d-flex
					align-items-center
					justify-content-between
				'>
				<Link
					to='hero'
					spy='true'
					smooth={true}
					duration={1000}
					offset={-70}
					hashspy='true'
					isdynamic='true'
					className='logo'>
					<img src={pcsLogo} alt='pcs logo' />
				</Link>

				<nav
					id='navbar'
					className={`${click ? `navbar navbar-mobile` : `navbar `}`}>
					<ul>
						{items.map((each, index) => (
							<Link
								className={`nav-link scrollto d-flex justify-content-center align-items-center`}
								to={each.to}
								activeClassName='active'
								key={index}
								spy='true'
								smooth={true}
								duration={5000}
								delay={5000}
								hashspy='true'
								isdynamic='true'
								offset={100}
								onClick={() => {
									setIsActive(isActive)
									if (click) {
										setClick(false)
									}
								}}>
								{each.title}
								<span></span>
							</Link>
						))}
					</ul>
					{/* <div className='d-flex'>
						<Button
							id='demo-positioned-button'
							className='btn d-flex align-self-center me-3'
							aria-controls='demo-positioned-menu'
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}>
							EN
							<i class='fas fa-sort-down'></i>
						</Button>
						<button
							className='btn'
							style={{
								color: '#fff',
								background: '#565dab',
								padding: '0.5rem',
							}}
							id='demo-positioned-button'
							aria-controls='demo-positioned-menu'
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}>
							Contact US
						</button>
						<Menu
							id='demo-positioned-menu'
							aria-labelledby='demo-positioned-button'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}>
							<MenuItem onClick={handleClose}>EN</MenuItem>
							<MenuItem onClick={handleClose}>DE</MenuItem>
							<MenuItem onClick={handleClose}>FR</MenuItem>
						</Menu>
					</div> */}

					<i
						className={
							click
								? 'fas fa-times mobile-nav-toggle i-pcs-color'
								: 'fas fa-bars mobile-nav-toggle i-white-color'
						}
						onClick={() => setClick(!click)}></i>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
