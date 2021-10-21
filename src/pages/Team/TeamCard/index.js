import React from 'react'
import './index.css'

function TeamCard(props) {
	return (
		<div className='card card-team'>
			<div className='card-body '>
				<img src={props.memImage} alt='...' className='card-team-img mb-3' />
				<div className='card-team-name'>{props.name}</div>
				<div className='card-team-position mb-3'>{props.role}</div>
				<p style={{ fontSize: '1.2rem' }} className='mb-0'>
					{props.desc}
				</p>
			</div>
			<div className='card-footer text-center'>
				<a
					href={`https://linkedin.com/${props.linkedIn}`}
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div>
		</div>
	)
}

export default TeamCard
