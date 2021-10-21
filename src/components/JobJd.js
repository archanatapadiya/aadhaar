import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import BreadCrumb from './BreadCrumb'
import Footer from './Footer'
import NavBar from './NavBar'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ApplyForJob from './ApplyForJob'

const NavLink = styled(Link)`
	padding: 20px;
	color: #fff;
	text-decoration: none;
	background-color: #565dab;
	transition: all 0.3s ease-in;
	margin-right: 1rem;
	font-weight: bold;
	&:hover {
		background-color: inherit;
		color: #565dab;
		transform: TranslateY(-5px);
	}

	& i {
		margin-right: 0.5rem;
	}
`

const Jobjd = (props) => {
	const id = props.match.params.id
	const data = props.data[id]

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main>
			<NavBar />
			<BreadCrumb
				breadCrumbData={[
					{ title: 'Home', path: '/' },
					{ title: 'Careers', path: '/careers' },
					{ title: id, path: id },
				]}
			/>
			{data ? (
				<section className='section section-lg bg-soft text-dark line-bottom-soft'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-12 text-center mb-4 mb-5'>
								<h1 className='display-2 font-weight-extreme mb-4'>
									{data.title}
								</h1>
								<div className='d-flex flex-column flex-lg-row justify-content-center'>
									<span
										className='h5 mb-3 mb-lg-0'
										style={{ marginRight: '1rem' }}>
										<i className='fas fa-map-marker-alt'></i>
										<span style={{ marginLeft: '1rem' }} className='ml-3'>
											{data.location}
										</span>
									</span>{' '}
									<span
										style={{ marginRight: '1rem' }}
										className='ml-lg-5 mb-3 mb-lg-0 h5'>
										<i className='fas fa-user-tie'></i>
										<span style={{ marginLeft: '1rem' }} className='ml-3'>
											{data.jobType}
										</span>
									</span>{' '}
									<span className='ml-lg-5 mb-3 mb-lg-0 h5'>
										<i className='fas fa-file-invoice-dollar'></i>
										<span style={{ marginLeft: '1rem' }} className='ml-3'>
											{data.Salary}
										</span>
									</span>
								</div>
							</div>
							<div className='col col-12 text-center mb-5'>
								<NavLink to='/careers' className='btn btn-primary animate-up-2'>
									<i className='fas fa-arrow-left mr-2'></i>See All Jobs
								</NavLink>
								<NavLink
									to={`${props.match.url}apply`}
									className='btn btn-primary animate-up-2'>
									<i className='fas fa-clipboard-list mr-2'></i>Apply Now
								</NavLink>
							</div>
						</div>

						<div className='row justify-content-center mb-5'>
							<div className='col col-md-10'>
								<h2 style={{ color: '#0b0b0c' }}>Responsibilities:</h2>
								<ul className='list-unstyled mb-5'>
									{data.responsibilities.map((each, index) => (
										<li className='py-3 lead ' key={index}>
											<div className='media d-flex'>
												<span
													style={{ marginRight: '1rem' }}
													className='icon icon-sm mr-3 mt-2'>
													<i className='fas fa-arrow-alt-circle-right'></i>
												</span>
												<div>{each}</div>
											</div>
										</li>
									))}
								</ul>
								<h2 style={{ color: '#0b0b0c' }}>Requirements:</h2>
								<ul className='list-unstyled mb-5'>
									{data.requirements.map((each, index) => (
										<li className='py-3 lead' key={index}>
											<div className='media d-flex'>
												<span
													style={{ marginRight: '1rem' }}
													className='icon icon-sm mr-3 mt-2'>
													<i className='fas fa-check-circle'></i>
												</span>
												<div>{each}</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<ApplyForJob data={data} />
					</div>
				</section>
			) : (
				<Redirect to='/' />
			)}
			<Footer />
		</main>
	)
}

export default Jobjd
