import React, { useState } from 'react'

const Accordion = ({ title, desc }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<li className={`${isActive ? 'active' : ''}`}>
			<div
				className='accordion-title d-flex justify-content-between'
				onClick={() => setIsActive(!isActive)}>
				<h6>{title}</h6>

				{isActive ? (
					<i className='fas fa-chevron-up'></i>
				) : (
					<i className='fas fa-chevron-up to-cross'></i>
				)}
			</div>
			{isActive && (
				<div className='accordion-content' data-aos='zoom-in' data-delay={5000}>
					<p>{desc}</p>
				</div>
			)}
		</li>
	)
}

export default Accordion
