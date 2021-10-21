import React, { useEffect } from 'react'
import './index.css'

import botVideo from '../../assets/videos/bot.mp4'
import { bot } from './content'
import Accordion from './Accordion'
import Phases from './Phases'
import Howwedo from './HowWeDo'
import Howcanwe from './HowCanWe'
import Whatweneed from './WhatWeNeed'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function BOT() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<NavBar />
			<section id='bot' className='bot'>
				<div
					style={{ borderBottom: '1px solid rgb(161, 161, 161,0.5)' }}
					className='container-fluid mb-5'>
					<div className='row'>
						<div
							className='section-title aos-init aos-animate'
							data-aos='fade-down'>
							<h2 className='text-center'>{bot.main}</h2>
							<span>{bot.main}</span>
						</div>
						<div
							className='col-12 d-flex flex-column justify-content-center align-items-stretch mb-5'
							data-aos='fade-right'>
							<div className='content'>
								<h2 className='text-center'>
									{bot.title}
									<strong> {bot.boldTitle}</strong>
								</h2>
								<p className='text-center'>{bot.subtitle}</p>
							</div>
						</div>
						<div
							className='col-lg-5 align-items-stretch position-relative video-box  mb-4'
							data-aos='fade-right'>
							<video
								autostart='true'
								autoPlay
								muted
								loop
								src={botVideo}
								type={'video/mp4'}
								className='bot-video'
							/>
						</div>

						<div
							className='col-lg-7 d-flex flex-column justify-content-center align-items-stretch'
							data-aos='fade-left'>
							<div className='accordion-list'>
								<ul>
									{bot.features.map(({ title, desc }, index) => (
										<Accordion key={index} title={title} desc={desc} />
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Phases />

				<Howwedo />
				<Howcanwe />
				<Whatweneed />
			</section>
			<Footer />
		</>
	)
}

export default BOT
