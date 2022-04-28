// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react'

import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Gallery from './gallery'
import { breadCrumbItemsContact } from './content'

import './index.css'

// let check = false

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id='review'>
			<NavBar />
			{/* <BreadCrumb
				breadCrumbData={[
					{ title: breadCrumbItemsContact.title1, path: '/' },
					{ title: breadCrumbItemsContact.title2, path: '/gallery' },
				]}
			/> */}
			<Gallery />
			<Footer />
		</section>
	)
}

export default Contact
