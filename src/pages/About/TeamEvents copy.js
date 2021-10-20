import React, { useEffect, useState } from 'react'

import team1 from '../../assets/images/portfolio/team1.jpeg'
import team2 from '../../assets/images/portfolio/team2.jpeg'
import team3 from '../../assets/images/portfolio/team3.jpeg'
import team4 from '../../assets/images/portfolio/team4.jpeg'
import team5 from '../../assets/images/portfolio/team5.jpeg'

import { Carousel } from 'react-carousel-minimal'
const images = [
	{
		image: team1,
		thumbnail: team1,
		caption: 'team1',
	},
	{
		image: team2,
		thumbnail: team2,
		caption: 'team2',
	},
	{
		image: team3,
		thumbnail: team3,
		caption: 'team3',
	},
	{
		image: team4,
		thumbnail: team4,
		caption: 'team4',
	},
	{
		image: team5,
		thumbnail: team5,
		caption: 'team5',
	},
]

const captionStyle = {
	fontSize: '2em',
	fontWeight: 'bold',
}
const slideNumberStyle = {
	fontSize: '20px',
	fontWeight: 'bold',
}

const TeamEvents = () => {
	const [imagesList, setImagesList] = useState(images)
	useEffect(() => {
		setImagesList(images)
	}, [])
	return (
		<section id='teamEvents'>
			<div className='section-title aos-init aos-animate' data-aos='fade-down'>
				<h2 className='text-center'>Team Events</h2>
				<span>Team Events</span>
			</div>
			<div
				style={{
					padding: '0 20px',
				}}
				className='col-12'>
				{imagesList && (
					<Carousel
						data={imagesList}
						time={5000}
						width='850px'
						height='auto'
						captionStyle={captionStyle}
						radius='10px'
						slideNumber={true}
						slideNumberStyle={slideNumberStyle}
						captionPosition='bottom'
						automatic={true}
						dots={true}
						pauseIconColor='white'
						pauseIconSize='40px'
						slideBackgroundColor='darkgrey'
						slideImageFit='cover'
						thumbnails={true}
						thumbnailWidth='150px'
						// style={{
						// 	textAlign: 'center',
						// 	maxWidth: '80%',
						// 	minWidth: '300px',
						// 	minHeight: '500px',
						// 	margin: '40px auto',
						// }}
						style={{
							textAlign: 'center',
							maxWidth: '1024px',
							minHeight: '700px',
							margin: '40px auto',
						}}
					/>
				)}
			</div>
		</section>
	)
}

export default TeamEvents
