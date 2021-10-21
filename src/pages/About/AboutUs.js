import React from 'react'
import CountUp from 'react-countup'
import { about, counts } from './content'
import aboutVideo from '../../assets/videos/about_us_video.mp4'

const AboutUs = () => {
	return (
		<section id='about' className='about d-flex flex-column'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<div className='row justify-content-end'>
					<div className='col-lg-12'>
						<div
							className='section-title aos-init aos-animate'
							data-aos='fade-down'>
							<h2 className='text-center'>{about.main}</h2>
							<span className='text-center'>{about.main}</span>
						</div>
						<div className='row justify-content-center'>
							<div className='col-12 col-md-6 d-md-flex mx-auto align-items-md-stretch'>
								<div className='count-box d-flex justify-content-center align-items-center'>
									<i className='far fa-smile-beam'></i>
									<div className='d-flex flex-column justify-content-center align-items-center'>
										<p>
											<CountUp duration={3} end={5} />
											<span>+</span>
										</p>
										<p>{counts.desc1}</p>
									</div>
								</div>
							</div>

							<div className='col-12 col-md-6 d-md-flex mx-auto align-items-md-stretch'>
								<div className='count-box d-flex justify-content-center  align-items-center'>
									<i className='fas fa-user-tie'></i>
									<div className='d-flex flex-column justify-content-center align-items-center'>
										<p>
											<CountUp duration={3} end={15} />
											<span>+</span>
										</p>
										<p>{counts.desc3}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* video */}
				<div className='row'>
					<div
						className='col-lg-6 video-box align-self-baseline aos-init aos-animate'
						data-aos='zoom-in'
						data-aos-delay='100'>
						<video
							autostart='true'
							autoPlay
							muted
							loop
							src={aboutVideo}
							type={'video/mp4'}
							className='about-video'
						/>
					</div>

					<div className='col-lg-6 pt-3 pt-lg-0 content '>
						<h3 className='mt-4 text-center'>{about.title}</h3>
						<ul className='mt-3'>
							<li className='mb-3 '>
								<i className='fas fa-check-double'></i>
								{about.desc1}
							</li>
							<li className='mb-3'>
								<i className='fas fa-check-double'></i> {about.desc2}
							</li>
							<li className='mb-3'>
								<i className='fas fa-check-double'></i> {about.desc3}
							</li>
							<li className='mb-3'>
								<i className='fas fa-check-double'></i> {about.desc4}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
