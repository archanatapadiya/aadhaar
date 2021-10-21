import React, { useState } from 'react'
import { phasesHeading, tabContents, tabImage, tabItems } from './content'

import TabItem from './TabItem'

const Phases = () => {
	const intialTab = tabItems[0].id
	const [activeTab, setActiveTab] = useState(intialTab)
	const [tabContent, setTabContent] = useState(tabContents['1'])
	const handleActiveTab = (label) => {
		setActiveTab(label)
		setTabContent(tabContents[label])
	}

	return (
		<div className='container' data-aos='fade-up'>
			<div className='section-title aos-init aos-animate' data-aos='fade-down'>
				<h2 className='text-center'>
					<strong>{phasesHeading.main}</strong>{' '}
				</h2>
				<span>{phasesHeading.main}</span>
			</div>

			<div className='content mb-5'>
				<h2 className='text-center'>{phasesHeading.title}</h2>
				<p className='text-center'>{phasesHeading.description}</p>
			</div>
			<ul className='nav nav-tabs row d-flex'>
				{tabItems.map(({ iconClass, tabTitle, id }) => (
					<TabItem
						key={id}
						tabData={{ iconClass, tabTitle, id }}
						handleActiveTab={handleActiveTab}
						activeTab={activeTab}
					/>
				))}
			</ul>

			<div className='tab-content'>
				<div className='tab-pane active show' id='tab-2'>
					<div className='row'>
						<div className='tab-content order-1 order-lg-3 col-lg-6 '>
							<div className='tab-pane active show'>
								<figure>
									<img
										src={tabImage[activeTab]}
										alt={`feature ${activeTab}`}
										className='img-fluid'
									/>
								</figure>
							</div>
						</div>
						<div className='col-lg-6 order-2 order-lg-2 d-flex flex-column justify-content-center'>
							<ul className='nav nav-tabs d-flex flex-column justify-content-center'>
								{tabContent.map((each, index) => (
									<li
										key={index}
										className='nav-link nav-item d-flex flex-column align-items-start mb-5'>
										<h4 className='mb-3'>{each.title}</h4>
										<p className='mb-3'>{each.description}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Phases
