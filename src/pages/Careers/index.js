import React, { useEffect } from 'react'
import './index.css'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Whyworkwithus from './WhyWorkWithUs'
import { careersBreadCrumb } from './content'
import Footer from '../../components/Footer'

function Careers() {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<NavBar />
			<section id='careers'>
				<BreadCrumb
					breadCrumbData={[
						{ title: careersBreadCrumb.title1, path: '/' },
						{ title: careersBreadCrumb.title2, path: '/careers' },
					]}
				/>
				<Whyworkwithus />
			</section>
			<Footer />
		</>
	)
}

export default Careers
