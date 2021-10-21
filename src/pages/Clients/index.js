import React from 'react'
import { clients } from './content'
import './index.css'

import 'swiper/swiper-bundle.css'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

function Clients() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}
	return (
		<>
			<section id='clients' className='clients'>
				<div
					className='section-title aos-init aos-animate'
					data-aos='fade-down'>
					<h2 className='text-center'>{clients.title}</h2>
					<span>{clients.title}</span>
				</div>
				<div className='section-header'>
					<p>{clients.desc}</p>
				</div>
				<div className='container'>
					<div className='row no-gutters clients-wrap clearfix wow fadeInUp'>
						{clients.clients.map((each, index) => (
							<div
								key={index}
								className='col-12 col-md-4  mx-auto p-1 p-lg-2 w-xs-100 '>
								<div className='client-logo'>
									<img
										src={each.image}
										className='img-fluid'
										alt={each.alt}
										onClick={() => openInNewTab(each.url)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Clients
