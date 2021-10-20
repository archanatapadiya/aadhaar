import React from 'react'
import './index.css'

import { services, services_info } from './content'

const Services = () => (
	<section id='services' className='services mt-5'>
		<div className='container' data-aos='fade-up' data-aos-delay='200'>
			<div className='row'>
				<div className='col-xl-12 text-center mb-4'>
					<div className='service-title'>
						<h2 className='services-title-heading mt-5'>
							{services.heading_2}
						</h2>
						<p className='services-sub-heading'>{services.heading_1}</p>
					</div>
					<p className='services-title-description'>{services.description}</p>
				</div>
			</div>
			<div className='row'>
				{services_info.map((service) => (
					<div className='col-lg-4 col-md-6 mt-5 mt-lg-3' data-aos='fade-up'>
						<div className='icon-box'>
							<div className='icon'>
								<img
									src={service.icon}
									className='service-icon'
									alt='devops-icon'
								/>
							</div>
							<div>
								<h4 className='title'>{service.title}</h4>
								<p className='description'>{service.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
)
export default Services
