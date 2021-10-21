import * as React from 'react'
import Alert from '@mui/material/Alert'

import Stack from '@mui/material/Stack'

export default function IconAlerts(props) {
	return (
		<Stack
			sx={{
				position: 'fixed',
				width: '35%',
				top: '130px',
				right: '0',
			}}
			spacing={2}>
			<Alert variant='filled' severity='success' sx={{ fontSize: '1.25rem' }}>
				{props.title}
			</Alert>
		</Stack>
	)
}
