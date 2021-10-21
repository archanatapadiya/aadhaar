import React from 'react'

import styled from 'styled-components'
import { main } from './content'
import { Typewriter } from 'react-simple-typewriter'
import { NavHashLink as Link } from 'react-router-hash-link'

import './index.css'

const ScrollContainer = styled.div`
	width: 25px;
	height: 25px;
	background-color: #fff;
	border-radius: 50%;
	padding: auto;
	position: absolute;
	bottom: 50px;
	left: 50%;
	color: #565dab;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`

function Banner() {
	return (
		<>
			<section id='hero' className='hero d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-7 d-flex flex-column justify-content-center text-center'
							data-aos='fade-right'>
							<h1>{main.title} </h1>

							{/* <div className='d-flex justify-content-start align-tems-center '> */}
							<h2 style={{ color: '#77be45', fontSize: '2rem' }}>
								<Typewriter
									words={[
										main.subtitle1,
										main.subtitle2,
										main.subtitle3,
										main.subtitle,
									]}
									loop={1}
									cursor
									cursorStyle=''
									typeSpeed={100}
									deleteSpeed={50}
									delaySpeed={1000}
								/>
							</h2>
							{/* </div> */}

							<div className='before'></div>

							<div className='d-flex justify-content-center text-center flex-wrap text-lg-start'>
								<Link
									to='/#about'
									spy='true'
									smooth={true}
									duration={100}
									hashspy='true'
									isdynamic='true'
									className='
										btn-get-started
										scrollto
										d-inline-flex
										align-items-center
										justify-content-center
										align-self-center
									'
									style={{
										marginRight: '1rem',
										padding: '1.5rem',
										border: '1px solid #565dab',
									}}>
									<span>{main.button1}</span>
									<i className='fas fa-arrow-right'></i>
								</Link>
								<Link
									style={{
										marginRight: '1rem',
										padding: '1.5rem',
										color: '#565dab',
										background: '#fff',
										border: '1px solid #565dab',
									}}
									to='/contact'
									spy='true'
									smooth={true}
									duration={100}
									hashspy='true'
									isdynamic='true'
									className='
								
										btn-get-started
										scrollto
										d-inline-flex
										align-items-center
										justify-content-center
										align-self-center
									'>
									<i
										style={{ marginRight: '0.5rem' }}
										className='fas fa-envelope'></i>
									<span>{main.button2}</span>
								</Link>
							</div>
						</div>
						<div className='col-lg-5 hero-img' data-aos='fade-left'>
							<img
								src='assets/img/hero-img.png'
								className='img-fluid banner-animation'
								alt='hero'
							/>
						</div>
					</div>
				</div>

				<Link
					to='/#about'
					spy='true'
					smooth={true}
					duration={100}
					hashspy='true'
					isdynamic='true'>
					<ScrollContainer>
						<i className='fas fa-chevron-down'></i>
						<div className='circle' style={{ animationDelay: '0s' }}></div>
						<div className='circle' style={{ animationDelay: '1s' }}></div>
						<div className='circle' style={{ animationDelay: '2s' }}></div>
						<div className='circle' style={{ animationDelay: '3s' }}></div>
					</ScrollContainer>
				</Link>
			</section>
		</>
	)
}

export default Banner
