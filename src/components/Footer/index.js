import React from 'react'
import { Link } from 'react-scroll'
import { footer } from './content'
import './index.css'

function Footer() {
	const year = new Date().getFullYear()
	console.log(year)
	return (
		<footer id='footer'>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-md-6 footer-contact'>
							<h4>{footer.title}</h4>
							<h5>
								<strong className='mb-4'>{footer.subtitle}</strong>
							</h5>
							<div className='d-flex p-2'>
								<i className='fas fa-map-marker-alt m-2'></i>
								<p>
									{footer.address.india[1]}
									<br />
									{footer.address.india[2]}
									<br />
									{footer.address.india[3]}
									<br />
									{footer.address.india[4]}
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex align-items-center'>
								<i className='far fa-envelope p-2'></i>
								<strong>{footer.email}</strong>
							</div>
							<br />
							<div className='d-flex align-items-center'>
								<i className='fas fa-mobile-alt p-2'></i>
								<strong>{footer.contact}</strong>
							</div>

							<h4 className='mt-4'>{footer.socialHeading}</h4>
							<div className='social-links mt-3'>
								<a href='google' className='twitter'>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='google' className='facebook'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a href='google' className='instagram'>
									<i className='fab fa-instagram'></i>
								</a>
								<a href='google' className='google-plus'>
									<i className='fab fa-skype'></i>
								</a>
								<a href='google' className='linkedin'>
									<i className='fab fa-linkedin-in'></i>
								</a>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 footer-links'>
							<h4>{footer.quickLinksHeading}</h4>
							<ul className='col-6'>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='about'>{footer.quickLinks[0]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='clients'>{footer.quickLinks[1]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='services'>{footer.quickLinks[2]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='team'>{footer.quickLinks[3]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='bot'>{footer.quickLinks[4]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='technologies'>{footer.quickLinks[5]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='careers'>{footer.quickLinks[6]}</Link>
								</li>
								<li className='col-6'>
									<i className='fas fa-angle-double-right'></i>
									<Link to='contact'>{footer.quickLinks[7]}</Link>
								</li>
							</ul>
						</div>

						<div className='col-lg-4 col-md-6 footer-links'>
							<h4>Address India</h4>
							<div className='d-flex'>
								<i className='fas fa-map-marker-alt'></i>
								<p>
									PCS IT Solutions Pvt Ltd, <br />
									2nd Floor, Godrej Millennium,
									<br />
									9, Koregaon Park Road,
									<br />
									Pune - 411001
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex '>
								<i className='fas fa-map-marker-alt'></i>
								<p>
									PCS IT Solutions Pvt Ltd,
									<br />
									6th Floor, Pentagon P2,
									<br />
									Magarpatta City,
									<br />
									Pune - 411013
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex align-items-center'>
								<i className='far fa-envelope'></i>
								<strong>anu@pcsitspl.com</strong>
							</div>
							<br />
							<div className='d-flex align-items-center'>
								<i className='fas fa-mobile-alt'></i>
								<strong>+ (1) 949 981 4976</strong>
							</div>

							<br />
						</div>
					</div>
					<div className='row'>
						<hr />
						<div className='col-12 copyright'>{footer.copyright}</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
