import React, { useRef, useState } from 'react'
import PhoneInput, {
	isPossiblePhoneNumber,
	isValidPhoneNumber,
} from 'react-phone-number-input'
import emailjs from 'emailjs-com'
import { contact } from '../../pages/Contact/content'
import './index.css'
import IconAlerts from '../Alert/index,'

const ApplyForJob = (props) => {
	const form = useRef()
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [address, setAddress] = useState('')
	const [message, setMessage] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)

	const [mobileErr, setMobileErr] = useState({})
	// const [isDisabled, setIsDisabled] = useState(true)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const [open, setOpen] = React.useState(false)
	// const handleClose = () => {
	// 	setOpen(false)
	// }
	const handleToggle = () => {
		setOpen(!open)
	}

	const onFileChange = (event) => {
		// Update the state
		setSelectedFile(event.target.files[0])
	}

	const onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData()

		// Update the formData object
		formData.append('myFile', selectedFile)

		// Details of the uploaded file
		// console.log(selectedFile)

		// Request made to the backend api
		// Send formData object
		// axios.post('api/uploadfile', formData)
	}
	const fileData = () => {
		if (selectedFile) {
			return (
				<div>
					<i className='fas fa-paperclip' style={{ marginRight: '0.5rem' }}></i>
					{selectedFile.name}
					<p>{selectedFile.type}</p>
				</div>
			)
		} else {
			return (
				<div>
					<br />
					<h4 style={{ fontSize: '0.65rem', color: '#646f79' }}>
						Choose before Pressing the Upload button
					</h4>
				</div>
			)
		}
	}

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
					setSelectedFile(null)
					setIsSubmitted(true)
					setTimeout(() => {
						setIsSubmitted(false)
					}, 10000)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<>
			<section id='contact' className='contact mb-5 '>
				<div className='container ' data-aos='fade-up'>
					<div className='row ' data-aos='fade-up' data-aos-delay='100'>
						<div className='col-lg-12 order-1 order-lg-2 '>
							{!isSubmitted ? (
								<>
									<form
										id='myForm'
										ref={form}
										onSubmit={sentEmail}
										className='php-email-form'>
										<div className='row'>
											<div className='col-12 d-flex justify-content-center align-items-center mb-4'>
												<h4 style={{ fontSize: '2rem', color: '#565dab' }}>
													Apply for{' '}
													{props.data.title
														? props.data.title
														: props.data.match.params.id}
												</h4>
											</div>
											<div className='col-12 col-md-6  form-group'>
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
											</div>
											<div className='col-12 col-md-6  form-group'>
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
											</div>
											<div className='form-group col-12  col-md-6'>
												<div className='col-12'>
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
												</div>
											</div>
											<div className='form-group col-md-6'>
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
											</div>
											<div className='form-group'>
												<div className='custom-file' onClick={onFileUpload}>
													<input
														type='file'
														className='custom-file-input'
														name='file'
														id='customFile'
														onChange={onFileChange}
													/>{' '}
													<label
														className='custom-file-label'
														hmtlFor='customFile'>
														Add Your Resume
													</label>
												</div>
												{fileData()}
											</div>
											<div className='form-group'>
												<textarea
													className='form-control'
													name='message'
													rows='3'
													placeholder='How did you hear about Perfect and Complete Solutions. *'
													required
													value={message}
													id='text-area'
													onChange={(e) => {
														setMessage(e.target.value)
													}}></textarea>
											</div>
											<div
												className='g-recaptcha form-group'
												data-sitekey='6LdWJ7EcAAAAADvBgytksLQf6pDFFkniIq23jAbo'></div>
											<div className='text-center'>
												<div className='cont'>
													<button onClick={handleToggle} type='submit'>
														Apply
													</button>
												</div>
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

export default ApplyForJob
