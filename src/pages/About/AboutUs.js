import React from 'react'
import CountUp from 'react-countup'
import { about, counts } from './content'
import aboutVideo from '../../assets/videos/about_us1.mp4'
import Pdf from '../../assets/pdf/NABL.pdf';
import nablLogo from '../../assets/images/nabl-logo.jpeg'
import aadhaarLogo from '../../assets/images/img.png'
import { useState, useEffect } from 'react';


function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
	  width,
	  height
	};
  }

  function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
	useEffect(() => {
	  function handleResize() {
		setWindowDimensions(getWindowDimensions());
	  }
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
  
	return windowDimensions;
  }

  
const AboutUs = () => {
	const { height, width } = useWindowDimensions();

	return (
		<section id='about' className='about d-flex flex-column'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<div className='row justify-content-center' style={{marginTop: 30}}>
					{width >= 1000 && (
					<div className='col-lg-2'>
							<img
								src={nablLogo}
								style={{height: 150, marginTop: 100}}
								alt='hero'
							/></div>
						 )}
						
					<div className='col-lg-8'>
						<div
						
							className='section-title aos-init aos-animate'
							// data-aos='fade-down'
							>
							<h2 style={{fontSize: "2.7rem"}} className='text-center'>{about.main}</h2>
							{width >= 1000 && (
							<span style={{fontSize: "2.7rem"}} className='text-center'>{about.main}</span>
							)}

							<h4 className='mt-4 text-center'>{about.subTitle}</h4>

							<a href={Pdf} target='_blank' rel='noopener noreferrer'>
						
							<h2  style={{color: 'red'}} className='mt-4 text-center'>{about.message}</h2>
								</a>
						</div>
						<div className='row justify-content-center'>
							<div className='col-6 col-md-6 d-md-flex mx-auto align-items-md-stretch'>
								<div className='count-box d-flex justify-content-center align-items-center'>
									<i className='far fa-smile-beam'></i>
									<div className='d-flex flex-column justify-content-center align-items-center'>
										<p>
											<CountUp duration={2} end={100} />
											<span>+</span>
										</p>
										<p>{counts.desc1}</p>
									</div>
								</div>
							</div>

							<div className='col-6 col-md-6 d-md-flex mx-auto align-items-md-stretch'>
								<div className='count-box d-flex justify-content-center  align-items-center'>
									<i className='fas fa-user-tie'></i>
									<div className='d-flex flex-column justify-content-center align-items-center'>
										<p>
											<CountUp duration={2} end={50} />
											<span>+</span>
										</p>
										<p>{counts.desc3}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{width >= 1000 && (
					<div className='col-lg-2'>
						
							<img
								src={aadhaarLogo}
								style={{height: 150, marginTop: 100}}
								alt='hero'
							/></div>
					)}

				</div>

				{/* video */}
				<div className='row'>
					<div
						className='col-lg-6 video-box align-self-baseline '
						// data-aos='zoom-in'
						style={{height: 500}}
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
							
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
