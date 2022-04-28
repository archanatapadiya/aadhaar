import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Review from './pages/Review'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import BOT from './pages/BOT'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BreadCrumb from './components/BreadCrumb'
import Accreditation from './pages/Accreditation'

function App() {
	window.onscroll = function () {
		myFunction()
	}

	function myFunction() {
		var winScroll =
			document.body.scrollTop || document.documentElement.scrollTop
		var height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight
		var scrolled = (winScroll / height) * 100
		document.getElementById('myBar').style.width = scrolled + '%'
	}
	useEffect(() => {
		window.scrollTo(0, 0)
		AOS.init({
			duration: 1200,
		})
		AOS.refresh()
	}, [])
	return (
		<>
			<div className='progress-header'>
				<div className='progress-container'>
					<div className='progress-bar' id='myBar'></div>
				</div>
			</div>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12  web-container '>
						<Switch>
							<Route path='/' exact>
								<>
									<Home />
						
								</>
							</Route>
							<Route path='/bot'>
								<>
									
								</>
							</Route>
							<Route path='/contact'>
								<>
									<Contact />
									
								</>
							</Route>
							<Route path='/review'>
								<>
									<Review />
									
								</>
							</Route>
							<Route path='/gallery'>
								<>
									<Gallery />
									
								</>
							</Route>
							<Route path='/accreditation'>
								<>
									<Accreditation />
								
								</>
							</Route>
							<Route exact path='/careers'>
								<>
									<Careers />
									
								</>
							</Route>
			

							<Redirect to='/'></Redirect>
						</Switch>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
