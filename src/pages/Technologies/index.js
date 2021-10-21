import React from 'react'

import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { technolgies, headings } from './content'
import './index.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper'

SwiperCore.use([Autoplay, Pagination])

function Technologies() {
	const breakpoints = {
		450: {
			slidesPerView: 2,
			slidesPerColumn: 4,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 3,
			slidesPerColumn: 4,
			spaceBetween: 10,
		},
		900: {
			slidesPerView: 4,
			spaceBetween: 10,
			slidesPerColumn: 4,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 10,
			slidesPerColumn: 4,
		},
	}
	return (
		<section id='technologies' className='technologies mt-5'>
			<div className='container' data-aos=''>
				<div className='col-xl-12 text-center mb-4'>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>{headings.title}</h2>
						<span className='text-center'>{headings.title}</span>
						<p>{headings.heading}</p>
					</div>
				</div>

				<div className='row'>
					<Swiper
						slidesPerView={1} // or 'auto'
						slidesPerColumn={4}
						spaceBetween={20}
						slidesPerColumnFill='row'
						grabCursor={true}
						autoplay={{ delay: 2500 }}
						pagination={{
							clickable: true,
						}}
						breakpoints={breakpoints}
						className='mySwiper'
						style={{ height: '100%' }}>
						{technolgies.map((each, index) => (
							<SwiperSlide key={index}>
								<i className={each.icon}></i>
								<div className='d-flex justify-content-center align-items-center h-100'>
									<h4>{each.title}</h4>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
export default Technologies
