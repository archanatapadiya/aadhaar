// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react'

import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import ContactUs from './ContactUs'
import { breadCrumbItemsContact } from './content'

import './index.css'

// let check = false

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id='contact-us'>
			<NavBar />
			<BreadCrumb
				breadCrumbData={[
					{ title: breadCrumbItemsContact.title1, path: '/' },
					{ title: breadCrumbItemsContact.title2, path: '/contact' },
				]}
			/>
			<ContactUs />
			<Footer />
		</section>
	)
}

export default Contact
