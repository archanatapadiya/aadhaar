import React, { useEffect, useState } from 'react'

import team1 from '../../assets/images/portfolio/team1.jpeg'
import team2 from '../../assets/images/portfolio/team2.jpeg'
import team3 from '../../assets/images/portfolio/team3.jpeg'
import team4 from '../../assets/images/portfolio/team4.jpeg'
import team5 from '../../assets/images/portfolio/team5.jpeg'

import { LightBox } from 'react-lightbox-pack'
import 'react-lightbox-pack/dist/index.css'

import Masonry from '@mui/lab/Masonry'
import MasonryItem from '@mui/lab/MasonryItem'

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

const TeamEvents = () => {
	const [toggle, setToggle] = React.useState(false)
	const [sIndex, setSIndex] = React.useState(0)
	const [imagesList, setImagesList] = useState(images)
	useEffect(() => {
		setImagesList(images)
	}, [])

	const lightBoxHandler = (state, sIndex) => {
		setToggle(state)
		setSIndex(sIndex)
	}

	return (
		<section id='teamEvents'>
			<div className='section-title aos-init aos-animate' data-aos='fade-down'>
				<h2 className='text-center'>Team Events</h2>
				<span>Team Events</span>
			</div>
			<Masonry columns={3} spacing={1}>
				{imagesList.map((item, index) => (
					<MasonryItem key={index}>
						<img
							src={`${item.image}?w=162&auto=format`}
							srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
							alt={item.caption}
							loading='lazy'
							onClick={() => {
								lightBoxHandler(true, index)
							}}
						/>
					</MasonryItem>
				))}
			</Masonry>

			<LightBox
				state={toggle}
				event={lightBoxHandler}
				data={imagesList}
				imageWidth='60vw'
				imageHeight='70vh'
				thumbnailHeight={50}
				thumbnailWidth={50}
				setImageIndex={setSIndex}
				imageIndex={sIndex}
			/>
		</section>
	)
}

export default TeamEvents
