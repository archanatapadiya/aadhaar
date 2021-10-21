import React, { useState } from 'react'
import { howWeDoHeading, howWeDOTabItems, howWeDOTabs } from './content'

const Howwedo = () => {
	const intialTab = howWeDOTabs[0].id
	const [activeTab, setActiveTab] = useState(intialTab)
	const [tabContent, setTabContent] = useState(howWeDOTabItems['1'])
	const handleActiveTab = (label) => {
		setActiveTab(label)
		setTabContent(howWeDOTabItems[label])
	}
	return (
		<section id='HowWeDo' className='how-we-do'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 d-flex justify-content-between flex-column align-items-between'>
						<div
							className='how-we-do-title aos-init aos-animate'
							data-aos='fade-right'>
							<div
								className='section-title aos-init aos-animate'
								data-aos='fade-down'>
								<h2 className='text-center'>{howWeDoHeading.title}</h2>
								<span>{howWeDoHeading.title}</span>
							</div>
							<div>
								<h4 className='mb-4 text-center'>
									{howWeDoHeading.description}
								</h4>
							</div>

							<ul className='nav nav-tabs d-flex flex-column justify-content-center'>
								{howWeDOTabs.map((each) => (
									<li
										className={`nav-link tab-item d-flex flex-column justify-content-center align-items-center mb-3 ${
											activeTab === each.id ? 'active show' : ''
										}`}
										onClick={() => handleActiveTab(each.id)}
										key={each.id}>
										<h4 className=' '>{each.title}</h4>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='row'>
							{tabContent.map((each, index) => (
								<div
									key={index}
									className='col-md-6 d-flex align-items-stretch mb-4 mr-2'>
									<div
										className='icon-box aos-init aos-animate rounded-4'
										data-aos='zoom-in'
										data-aos-delay='100'>
										<div className='icon'>
											<i className={each.iconClass}></i>
										</div>
										<h4>{each.title}</h4>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Howwedo
