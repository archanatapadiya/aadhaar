import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Jobjd from './components/JobJd'
import { JDS } from './components/JobJdContent'
import BOT from './pages/BOT'
import ApplyForJob from './components/ApplyForJob'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BreadCrumb from './components/BreadCrumb'
import Widget from './components/Widget'

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
									<Widget
										widgetList={[
											{
												icon: <i className='fas fa-chevron-up'></i>,
												action: 'scroll',
												title: 'scroll to Top',
											},
											{
												icon: <i className='fas fa-briefcase'></i>,
												action: '/careers',
												title: 'Careers',
											},
											{
												icon: <i className='fas fa-envelope'></i>,
												action: '/contact',
												title: 'Contact Us',
											},
										]}
									/>
								</>
							</Route>
							<Route path='/bot'>
								<>
									<BOT />
									<Widget
										widgetList={[
											{
												icon: <i className='fas fa-chevron-up'></i>,
												action: 'scroll',
												title: 'scroll to Top',
											},
											{
												icon: <i className='fas fa-briefcase'></i>,
												action: '/careers',
												title: 'Careers',
											},
											{
												icon: <i className='fas fa-envelope'></i>,
												action: '/contact',
												title: 'Contact Us',
											},
											{
												icon: <i className='fas fa-home'></i>,
												action: '/',
												title: 'Home',
											},
										]}
									/>
								</>
							</Route>
							<Route path='/contact'>
								<>
									<Contact />
									<Widget
										widgetList={[
											{
												icon: <i className='fas fa-chevron-up'></i>,
												action: 'scroll',
												title: 'scroll to Top',
											},
											{
												icon: <i className='fas fa-briefcase'></i>,
												action: '/careers',
												title: 'Careers',
											},
											{
												icon: <i className='fas fa-home'></i>,
												action: '/',
												title: 'Home',
											},
										]}
									/>
								</>
							</Route>
							<Route exact path='/careers'>
								<>
									<Careers />
									<Widget
										widgetList={[
											{
												icon: <i className='fas fa-chevron-up'></i>,
												action: 'scroll',
												title: 'scroll to Top',
											},
											{
												icon: <i className='fas fa-envelope'></i>,
												action: '/contact',
												title: 'Contact Us',
											},
											{
												icon: <i className='fas fa-home'></i>,
												action: '/',
												title: 'Home',
											},
										]}
									/>
								</>
							</Route>
							<Route
								exact
								path='/careers/:id/'
								render={(props) => (
									<>
										<Jobjd data={JDS} {...props} />
										<Widget
											widgetList={[
												{
													icon: <i className='fas fa-chevron-up'></i>,
													action: 'scroll',
													title: 'scroll to Top',
												},
												{
													icon: <i className='fas fa-briefcase'></i>,
													action: '/careers',
													title: 'Careers',
												},
												{
													icon: <i className='fas fa-envelope'></i>,
													action: '/contact',
													title: 'Contact Us',
												},
												{
													icon: <i className='fas fa-home'></i>,
													action: '/',
													title: 'Home',
												},
											]}
										/>
									</>
								)}
							/>
							<Route
								exact
								path='/careers/:id/apply'
								render={(props) => (
									<>
										<NavBar />
										<BreadCrumb
											breadCrumbData={[
												{ title: 'Home', path: '/' },
												{ title: 'Careers', path: '/careers' },
												{ title: 'Apply' },
											]}
										/>
										<ApplyForJob data={props} />
										<Footer />
										<Widget
											widgetList={[
												{
													icon: <i className='fas fa-chevron-up'></i>,
													action: 'scroll',
													title: 'scroll to Top',
												},
												{
													icon: <i className='fas fa-briefcase'></i>,
													action: '/careers',
													title: 'Careers',
												},
												{
													icon: <i className='fas fa-envelope'></i>,
													action: '/contact',
													title: 'Contact Us',
												},
												{
													icon: <i className='fas fa-home'></i>,
													action: '/',
													title: 'Home',
												},
											]}
										/>
									</>
								)}
							/>

							<Redirect to='/'></Redirect>
						</Switch>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
