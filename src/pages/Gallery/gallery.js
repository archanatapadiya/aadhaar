import React, { useEffect, useState } from 'react'

import team1 from '../../assets/labphotos/ConferenceArea.jpg'
import team2 from '../../assets/labphotos/FormulationAndSampling.jpg'
import team3 from '../../assets/labphotos/HPLCandGCRoom.jpg'
import team4 from '../../assets/labphotos/RawMaterialStorage.jpg'
import team5 from '../../assets/labphotos/StabilityRoom.jpg'
import team6 from '../../assets/labphotos/WetLab.jpg'
import team7 from '../../assets/labphotos/ConferenceArea.jpg'

import logo from '../../assets/labphotos/FormulationAndSampling.jpg'

import { LightBox } from 'react-lightbox-pack'
import 'react-lightbox-pack/dist/index.css'

import Masonry from '@mui/lab/Masonry'
import MasonryItem from '@mui/lab/MasonryItem'

const images = [
	{
		image: team1,
		thumbnail: team1,
		caption: 'ConferenceArea',
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
	{
		image: team6,
		thumbnail: team6,
		caption: 'team6',
	},
	// {
	// 	image: team7,
	// 	thumbnail: team7,
	// 	caption: 'team7',
	// },
]

const TeamEvents = () => {
	const [toggle, setToggle] = React.useState(false)
	const [sIndex, setSIndex] = React.useState(0)
	const [imagesList, setImagesList] = useState(images)
	useEffect(() => {
		setImagesList(images)
	}, [])

	console.log('imagesList', imagesList)
	const lightBoxHandler = (state, sIndex) => {
		setToggle(state)
		setSIndex(sIndex)
	}

	return (
		<section id='teamEvents'>
			<div className='section-title aos-init aos-animate' data-aos='fade-down'>
				<h2 className='text-center'>Gallery</h2>
				<span>Gallery</span>
			</div>
			
			<img src={logo} alt="logo"  width="1" height="1" />

			<Masonry columns={3} spacing={1}>
				{imagesList.map((item, index) => (
					<MasonryItem key={index}>
						<img
							src={(`${item.image}`)}
							srcSet={`${item.image}`}
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
