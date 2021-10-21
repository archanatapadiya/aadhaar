import React from 'react'
import { value } from './content'

const Values = () => {
	return (
		<section id='values' className='values'>
			<div className='container ' data-aos='fade-up'>
				<header className='section-header'>
					<div className='section-title ' data-aos='fade-down'>
						<h2 className='text-center'>{value.title}</h2>
						<span className='text-center'>{value.title}</span>
					</div>
					<p style={{ fontSize: '1rem' }}>{value.desc}</p>
				</header>

				<div className='row'>
					{value.valuesList.map((each, index) => (
						<div className='col-lg-4 mt-4' key={index}>
							<div className='box ' data-aos='fade-up' data-aos-delay='200'>
								<img src={each.img} className='img-fluid' alt='' />
								<h3>{each.title} </h3>
								<p>{each.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Values
