import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { contact } from './content'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import IconAlerts from '../../components/Alert/index,'

const ContactUs = () => {
	const form = useRef()
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [address, setAddress] = useState('')
	const [message, setMessage] = useState('')

	const [mobileErr, setMobileErr] = useState({})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const formValidation = () => {
		const mobileErr = {}
		let isValid = true
		let phoneNumberValidation =
			isPossiblePhoneNumber(mobile) !== true &&
			isValidPhoneNumber(mobile) === false

		if (phoneNumberValidation) {
			mobileErr.mobileShort = '* Please enter valid number'
			isValid = false
		}

		setMobileErr(mobileErr)

		return isValid
	}

	function sentEmail(e) {
		e.preventDefault()

		const isValid = formValidation()

		if (isValid) {
			emailjs
				.sendForm(
					'service_iybbixf',
					'template_od5vhlh',
					'#myForm',
					'user_1ZQjtCiBoh1HFfh3WfmyD'
				)
				.then((res) => {
					setUserName('')
					setEmail('')
					setMobile('')
					setAddress('')
					setMessage('')

					setIsSubmitted(true)
					setTimeout(() => {
						setIsSubmitted(false)
					}, 5000)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}
	return (
		<>
			<section id='contact' className='contact mb-5'>
				<div className='container ' data-aos='fade-up'>
					<div className='row ' data-aos='fade-up' data-aos-delay='100'>
						<div className='col-lg-6 order-2 order-lg-1 my-4 my-lg-0 '>
							<iframe
								title='This is a unique title'
								className='mb-4 mb-lg-0'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.378171967709!2d73.92341131440718!3d18.511805074274783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f2bf66ef03%3A0x465c38ee790d278b!2sPCS%20It%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1633119288768!5m2!1sen!2sin'
								frameBorder='0'
								style={{ border: '0', width: '100%', height: '100%' }}
								allowFullScreen=''></iframe>
						</div>
						<div className='col-lg-6 order-1 order-lg-2 '>
							{!isSubmitted ? (
								<>
									<form
										id='myForm'
										ref={form}
										onSubmit={sentEmail}
										className='php-email-form'>
										<div className='row'>
											<div className='col-12 d-flex justify-content-center align-items-center mb-4'>
												<i
													style={{
														fontSize: '2rem',
														marginRight: '1rem',
														color: '#565dab',
													}}
													className='fas fa-paper-plane mr-2'></i>
												<h4 style={{ fontSize: '2rem', color: '#565dab' }}>
													{contact.title}
												</h4>
											</div>
											<div className='col form-group'>
												<input
													type='text'
													name='name'
													className='form-control'
													id='name'
													value={userName}
													placeholder={contact.formPlaceHolder.name}
													required
													onChange={(e) => {
														setUserName(e.target.value)
													}}
												/>
												<i
													style={{
														position: 'absolute',
														right: '30px',
														top: '6px',
														background: '#565dab',
														padding: '0.5rem',
														borderRadius: '50%',
														color: '#fff',
													}}
													className='far fa-user'></i>
											</div>
											<div className='form-group'>
												<div className='col-md-12 '>
													<PhoneInput
														className='input form-control d-flex'
														defaultCountry='IN'
														name='number'
														placeholder={contact.formPlaceHolder.number}
														value={mobile}
														onChange={setMobile}
													/>
													{Object.keys(mobileErr).map((key, index) => {
														return (
															<div
																key={index}
																style={{ color: 'red' }}
																className='fonts mt-1'>
																{mobileErr[key]}
															</div>
														)
													})}
													<i
														style={{
															position: 'absolute',
															right: '30px',
															top: '10px',
															background: '#565dab',
															padding: '0.5rem',
															borderRadius: '50%',
															color: '#fff',
															transform: 'rotateZ(90deg)',
														}}
														className='fas fa-phone-alt'></i>
												</div>
											</div>
											<div className='col form-group'>
												<input
													type='email'
													className='form-control'
													name='email'
													id='email'
													value={email}
													placeholder={contact.formPlaceHolder.email}
													required
													onChange={(e) => {
														setEmail(e.target.value)
													}}
												/>
												<i
													style={{
														position: 'absolute',
														right: '30px',
														top: '6px',
														background: '#565dab',
														padding: '0.5rem',
														borderRadius: '50%',
														color: '#fff',
													}}
													className='far fa-envelope'></i>
											</div>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												name='address'
												id='address'
												placeholder={contact.formPlaceHolder.address}
												value={address}
												required
												onChange={(e) => {
													setAddress(e.target.value)
												}}
											/>
											<i
												style={{
													position: 'absolute',
													right: '20px',
													top: '6px',
													background: '#565dab',
													padding: '0.5rem',
													borderRadius: '50%',
													color: '#fff',
												}}
												className='fas fa-map-marker-alt'></i>
										</div>
										<div className='form-group'>
											<textarea
												className='form-control'
												name='message'
												rows='3'
												placeholder={contact.formPlaceHolder.message}
												required
												value={message}
												onChange={(e) => {
													setMessage(e.target.value)
												}}></textarea>
										</div>
										<div
											className='g-recaptcha form-group'
											data-sitekey='6LdWJ7EcAAAAADvBgytksLQf6pDFFkniIq23jAbo'></div>
										<div className='text-center'>
											<div className='cont'>
												<button type='submit'>
													{contact.formPlaceHolder.button}
												</button>
											</div>
										</div>
									</form>
								</>
							) : (
								<div
									style={{
										width: '100%',
										height: '100%',
										border: '1px solid #565dab',
										borderRadius: '10px',
									}}
									className='d-flex flex-column justify-content-center align-items-center'>
									<div className='success-animation '>
										<svg
											className='checkmark mb-5'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 52 52'>
											<circle
												className='checkmark__circle'
												cx='26'
												cy='26'
												r='25'
												fill='none'
											/>
											<path
												className='checkmark__check'
												fill='none'
												d='M14.1 27.2l7.1 7.2 16.7-16.8'
											/>
										</svg>
										<h3 style={{ color: '565dab' }}>
											{contact.formPlaceHolder.afterSubmit}
										</h3>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
			{isSubmitted && (
				<IconAlerts title={contact.formPlaceHolder.alertHeading} />
			)}
		</>
	)
}

export default ContactUs
