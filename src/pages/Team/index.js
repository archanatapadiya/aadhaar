import React from 'react'
import './index.css'
import { items } from './content'
import { teamHeadings } from './content'
import TeamCard from './TeamCard'

// multi carousal
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TeamEvents from './TeamEvents'

const Team = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 768, min: 300 },
			items: 1,
		},
	}

	return (
		<>
			<section id='team' className='team'>
				<div className='container'>
					<div className='row' data-aos='fade-up'>
						<div
							className='section-title aos-init aos-animate'
							data-aos='fade-down'>
							<h2 className='text-center'>{teamHeadings.title}</h2>
							<span className='text-center'>{teamHeadings.title}</span>
							<p>{teamHeadings.description}</p>
						</div>
						<Carousel
							additionalTransfrom={0}
							arrows
							autoPlaySpeed={3000}
							centerMode={false}
							className=''
							draggable
							focusOnSelect={false}
							infinite
							keyBoardControl
							minimumTouchDrag={80}
							renderButtonGroupOutside={false}
							renderDotsOutside={false}
							containerClass='carousel-container'
							showDots={false}
							sliderClass=''
							slidesToSlide={1}
							swipeable
							responsive={responsive}
							removeArrowOnDeviceType={['tablet', 'mobile']}
							dotListClass='custom-dot-list-style'
							itemClass='carousel-item-padding-40-px'>
							{items.map((each, index) => (
								<TeamCard
									memImage={each.Image}
									name={each.name}
									role={each.role}
									desc={each.desc}
									linkedIn={each.linkedIn}
									key={index}
								/>
							))}
						</Carousel>
					</div>
				</div>
			</section>
			<TeamEvents />
		</>
	)
}

export default Team
