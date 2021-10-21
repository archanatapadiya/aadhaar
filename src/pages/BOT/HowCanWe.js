import React from 'react'
import { howCanWeContent } from './content'

const Howcanwe = () => {
	return (
		<section id='howCanWe' className='how-can-we'>
			<div className='container'>
				<div
					className='section-title aos-init aos-animate'
					data-aos='fade-down'>
					<span>{howCanWeContent.title}</span>
					<h2>{howCanWeContent.title}</h2>
					<p>{howCanWeContent.description}</p>
				</div>

				<div className='row'>
					{howCanWeContent.points.map((each, index) => (
						<div key={index} className='col-md-6'>
							<div
								className='icon-box aos-init aos-animate'
								data-aos='fade-up'
								data-aos-delay='100'>
								<i className={each.icon} style={{ color: each.color }}></i>

								<h4>{each.title}</h4>
								<p>{each.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Howcanwe
