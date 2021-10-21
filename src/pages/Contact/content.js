import React from 'react'
import { Mail, MapPin, Phone } from 'react-feather'

export const breadCrumbItemsContact = {
	title1: 'Home',
	title2: 'Contact Us',
}

export const contact = {
	title: 'Contact Us',
	email: {
		icon: <Mail />,
		title: 'contact.email.title',
		email: 'anu@pcsitspl.com',
		email2: 'deepak@perfect108.com',
	},
	address: {
		icon: <MapPin />,
		title: 'Address India',
		addresses: [
			'2nd Floor, Godrej Millennium, 9, Koregaon Park Road, Pune - 411001.',
			'6th Floor, Pentagon P2, Magarpatta City, Pune - 411013',
		],
	},
	addresss: {
		icon: <MapPin />,
		title: 'Address USA',
		addresses1: [
			'Perfect and Complete Solutions Inc,704 Lundy,Pacifica,CA,94044',
		],
	},
	phone: {
		icon: <Phone />,
		title: 'contact.phone.title',
		phones: ['+ (91) 93597 60780', '+ (91) 93730 97062‬'],
	},
	formPlaceHolder: {
		name: 'Your Name',
		number: 'Your Number',
		email: 'Your Email',
		address: 'Your Address',
		message: 'Your message',
		button: 'Send Message',
		afterSubmit: "	We'll get back to you soon...",
		alertHeading: "Mail sent...We'll get back to you soon!!",
	},
}
