import React, { useEffect } from 'react'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import About from '../About'
import Clients from '../Clients'

import Services from '../Services'
import Team from '../Team'
import Gallery from '../Gallery'

import Technologies from '../Technologies'
import './index.css'

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<NavBar />
			<About />
			<Clients />
			<Services />
			<Team />
			{/* <Gallery /> */}
			<Technologies />
			<Footer />
		</>
	)
}

export default Home
