import React from 'react'
import { Link } from 'react-router-dom'
import { jobItems } from './content'

const Jobitem = (props) => {
	return (
		<>
			<div className='row'>
				<div className='col-12 col-md-6 mb-4 mb-lg-0'>
					<h3 style={{ color: '#fff' }} className='mb-3'>
						{props.jd.jobTitle}
					</h3>
					<p style={{ color: '#fff' }} className='mb-4'>
						{props.jd.jobBriefDescription}
					</p>
					<div className='d-flex flex-wrap'>
						<div className='stretched-link' style={{ marginRight: '1rem' }}>
							<i
								style={{ color: '#fff', marginRight: '5px' }}
								className='fas fa-map-marker-alt'></i>
							<span style={{ color: '#fff' }} className='h6 text-sm mr-2'>
								{props.jd.JobLocation}
							</span>
						</div>
						<span className='mr-4'>
							<i style={{ marginRight: '5px' }} className='fas fa-user-tie'></i>
							<span style={{ marginRight: '5px' }} className='h6 text-sm mr-2'>
								{props.jd.JobType}
							</span>
						</span>
					</div>
				</div>
				<div className='col-12  col-md-6 d-flex align-items-center justify-content-md-end flex-wrap'>
					<Link
						to={`${props.jd.path}apply`}
						className='btn btn-white mb-3 animate-up-2'
						style={{ marginRight: '1rem' }}>
						{jobItems.title1}
					</Link>
					<Link
						to={props.jd.path}
						className='btn btn-white text-primary  mb-3 animate-up-2 m-0'>
						<i className='fas fa-clipboard-list mr-2'></i>
						{jobItems.title2}
					</Link>
				</div>
			</div>
		</>
	)
}

export default Jobitem
