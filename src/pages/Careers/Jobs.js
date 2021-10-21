import React from 'react'
import { jobItemsContent, jobsList } from './content'
import Jobitem from './JobItem'

const Jobs = (props) => {
	return (
		<section className='section section-lg bg-soft'>
			<div className='container'>
				<div className='row justify-content-center mb-4 mb-lg-6'>
					<div className='col col-md-8 text-center'>
						<h2 className='display-2 mb-3'>{jobItemsContent.title}</h2>
						<p className='lead'>{jobItemsContent.desc}</p>
					</div>
				</div>
				<div className='row mb-6'>
					{jobsList.map((each, index) => (
						<div className='col-12 mb-4' key={index}>
							<div className='card bg-primary border-0 text-white'>
								<div className='card-body p-4 p-lg-5'>
									<Jobitem jd={each} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Jobs
