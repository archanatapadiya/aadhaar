// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react'

import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import ContactUs from './ContactUs'
import { breadCrumbItemsContact } from './content'
import Pdf from '../../assets/pdf/NABL.pdf';
import Pdf1 from '../../assets/pdf/AccreditationOpen.pdf';
import nablLogo from '../../assets/images/nabl-logo.jpeg'

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
					{ title: breadCrumbItemsContact.title2, path: '/accreditation' },
				]}
			/>

								

<div className='text-center' style={{marginBottom: 50}}>



<div className='text-center'>
					
							<h2 style={{color: 'red'}} className='mt-4 text-center'>NABL ISO/IEC 17025 : 2017 ACCREDITED LABORATORY</h2>
							
					</div>
					<div className='text-center'>
					<a href={Pdf} target='_blank' rel='noopener noreferrer'>
							<h2  className='mt-4 text-center'>NABL Certificate</h2>
								</a>
					</div>
					<div className='text-center'>
					<a href={Pdf1} target='_blank' rel='noopener noreferrer'>
							<h2  className='mt-4 text-center'>NABL Scope</h2>
								</a>
					</div>
					</div>


			<Footer />
		</section>
	)
}

export default Contact
