import React from 'react'

import { designAndDevelopment, functions } from './content'

const Features = () => {
	return (
		<section id='features' className='features'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<header className='section-header'>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>{functions.title}</h2>
						<span className='text-center'>{functions.title}</span>
					</div>
					<p style={{ fontSize: '1rem' }}>{functions.desc}</p>
				</header>

				<div className='row'>
					<div className='col-lg-6'>
						<img src='assets/img/features.png' className='img-fluid' alt='' />
					</div>

					<div className='col-lg-6 mt-5 mt-lg-0 d-flex'>
						<div className='row align-self-center gy-4'>
							{functions.functionsList.map((each, index) => (
								<div
									key={index}
									className='col-md-6 aos-init aos-animate'
									data-aos='zoom-out'
									data-aos-delay='200'>
									<div className='feature-box d-flex align-items-center'>
										<i className='far fa-check-square'></i>
										<h3>{each}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div
					className='row feture-tabs aos-init aos-animate'
					data-aos='fade-up'>
					<div className='col-lg-6'>
						<div className='tab-content'>
							{functions.functionsHistory.map((each, index) => (
								<div key={index}>
									<div className='d-flex align-items-center mb-2' key={index}>
										<i className='fas fa-check-double'></i>
										<h4>{each.title}</h4>
									</div>
									<p>{each.desc}</p>
								</div>
							))}
						</div>
					</div>

					<div className='col-lg-6'>
						<img src='assets/img/features-2.png' className='img-fluid' alt='' />
					</div>
				</div>

				<div
					className='row feature-icons aos-init aos-animate'
					data-aos='fade-up'>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>{designAndDevelopment.title}</h2>
						<span className='text-center'>{designAndDevelopment.title}</span>
					</div>

					<div className='row'>
						<div
							className='col-xl-4 text-center aos-init aos-animate'
							data-aos='fade-right'
							data-aos-delay='100'>
							<img
								src='assets/img/features-3.png'
								className='img-fluid p-4'
								alt=''
							/>
						</div>

						<div className='col-xl-8 d-flex content'>
							<div className='row align-self-center gy-4'>
								{designAndDevelopment.techList.map((each, index) => (
									<div
										key={index}
										className='col-md-6 icon-box aos-init aos-animate'
										data-aos='fade-up'>
										<img src={each.img} alt='responsive web' />

										<div className='d-flex flex-column justify-content-center'>
											<h4> {each.title}</h4>
											<p>{each.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
