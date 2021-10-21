import React from 'react'
import { whatWeDoContent } from './content'

const Whatweneed = () => {
	return (
		<section id='whatWeNeed' className='what-we-need'>
			<div className='container'>
				<div
					className='section-title aos-init aos-animate'
					data-aos='fade-down'>
					<span>{whatWeDoContent.title}</span>
					<h2>{whatWeDoContent.title}</h2>
					<p>{whatWeDoContent.description}</p>
				</div>

				<div className='row'>
					{whatWeDoContent.points.map((each, index) => (
						<div key={index} className='col-md-6'>
							<div
								className='icon-box aos-init aos-animate'
								data-aos='fade-up'
								data-aos-delay='100'>
								<i className={each.icon} style={{ color: each.style }}></i>

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

export default Whatweneed
