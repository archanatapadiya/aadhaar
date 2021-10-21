import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

import team1 from '../../assets/images/portfolio/team1.jpeg'
import team2 from '../../assets/images/portfolio/team2.jpeg'
import team3 from '../../assets/images/portfolio/team3.jpeg'
import team4 from '../../assets/images/portfolio/team4.jpeg'
import team5 from '../../assets/images/portfolio/team5.jpeg'
import Box from '@mui/material/Box'
const images = [
	{
		img: team1,
		thumbnail: team1,
		title: 'team1',
	},
	{
		img: team2,
		thumbnail: team2,
		title: 'team2',
	},
	{
		img: team3,
		thumbnail: team3,
		title: 'team3',
	},
	{
		img: team4,
		thumbnail: team4,
		title: 'team4',
	},
	{
		img: team5,
		thumbnail: team5,
		title: 'team5',
	},
]

const Portfolio = () => {
	return (
		<Box
			sx={{ width: '100%', height: 'auto', overflowY: 'auto', margin: 'auto' }}>
			<ImageList variant='woven' cols={4} gap={8}>
				{images.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=161&fit=crop&auto=format`}
							srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	)
}

export default Portfolio
