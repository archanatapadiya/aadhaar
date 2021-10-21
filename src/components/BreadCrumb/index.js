import React from 'react'

import { NavHashLink } from 'react-router-hash-link'
import './index.css'

const BreadCrumb = (props) => {
	const breadCrumbItems = props.breadCrumbData
	const length = breadCrumbItems.length

	return (
		<section className='col-12 breadcrumb-container '>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='text-primary mb-3'>
							<NavHashLink to={breadCrumbItems[length - 2].path}>
								<span>
									<i className='fas fa-chevron-circle-left'></i>
								</span>
							</NavHashLink>{' '}
							{breadCrumbItems[length - 1].title}
						</h2>
						<ol className='breadcrumb mb-0 p-0'>
							{breadCrumbItems.slice(0, -1).map((each, index) => (
								<li key={index} className='breadcrumb-items'>
									<NavHashLink to={each.path}>{each.title}</NavHashLink>
									<i
										style={{ marginLeft: '1rem' }}
										className='fas fa-chevron-right'></i>
								</li>
							))}
							<li className='breadcrumb-items active'>
								<span>{breadCrumbItems[length - 1].title}</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BreadCrumb
