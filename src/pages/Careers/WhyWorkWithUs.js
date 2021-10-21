import React from 'react'

import Jobs from './Jobs'
import {
	addResumeSection,
	reasonsYouLove,
	WhyworkwithusContent,
} from './content'
import addResume from '../../assets/images/addResume.jpg'
import { NavHashLink } from 'react-router-hash-link'
import joinUs from '../../assets/videos/joinUs.mp4'
const Whyworkwithus = () => {
	return (
		<section className='why-work-with-us'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 mb-4 mb-lg-0'>
						<div className='embed-responsive embed-responsive-16by9 mr-2'>
							<video
								autostart='true'
								autoPlay
								muted
								loop
								height='370'
								src={joinUs}
								type={'video/mp4'}
								className='about-video'
							/>
						</div>
					</div>
					<div className='col-lg-6 align-self-center'>
						<div className='section-heading'>
							<h2 className='title'>
								<span>{WhyworkwithusContent.title}</span>
							</h2>
							<p>{WhyworkwithusContent.desc}</p>
						</div>
						<ul className='mb-0 list-style p-0'>
							{WhyworkwithusContent.list.map((each, index) => (
								<li key={index}>
									<i className='fas fa-angle-right mr-3 text-primary'></i>
									{each}
								</li>
							))}
						</ul>
					</div>
				</div>
				<section className='space-pb'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-heading center  text-center'>
									<h2 className='title'>
										<span>{reasonsYouLove.title}</span>
									</h2>
									<p>{reasonsYouLove.desc}</p>
								</div>
							</div>
						</div>
						<div className='row'>
							{reasonsYouLove.reasonsLists.map((each, index) => (
								<div key={index} className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
									<div className='border mb-4 mb-lg-0 p-3 pb-4 h-100'>
										<div className='feature-info-icon mb-5'>
											<img
												src={each.img}
												alt={each.title}
												className='flaticon-selection-process text-primary fa-4x'
											/>
										</div>
										<div className='feature-info-content'>
											<h5 className='text-black mb-3'>{each.title}</h5>
											<p className='mb-0'>{each.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* add resume section */}
				<Jobs />
				<div className='row'>
					<div className='col-md-4 align-self-center'>
						<img src={addResume} alt='' />
					</div>
					<div className='col-md-8 d-flex flex-column justify-content-center align-self-center'>
						<h1 style={{ fontSize: '2rem', textAlign: 'center' }}>
							Can't Find a suitable Position?
						</h1>
						<h1 style={{ fontSize: '2rem', textAlign: 'center' }}>
							{addResumeSection.title1}
						</h1>

						<NavHashLink
							style={{ fontSize: '1rem', textAlign: 'center' }}
							to='/careers/pcs/apply'
							className='btn btn-primary pull-right align-self-center'>
							{addResumeSection.title2}
						</NavHashLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Whyworkwithus
