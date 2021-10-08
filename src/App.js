import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'

import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Careers from './pages/Careers'

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		})
		AOS.refresh()
	}, [])
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12  web-container d-flex justify-content-center align-items-center'>
						<NavBar />
						<Switch>
							<Route path='/' exact={true}>
								<Home />
							</Route>
							<Route exact path='/contact'>
								<Contact />
							</Route>
							<Route exact path='/careers'>
								<Careers />
							</Route>
							<Redirect to='/'></Redirect>
						</Switch>
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
