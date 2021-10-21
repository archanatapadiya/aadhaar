import * as React from 'react'
import './index.css'

import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'

import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useHistory } from 'react-router'

export default function Widget(props) {
	const [widget, setWidget] = React.useState([])
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	let history = useHistory()

	React.useEffect(() => {
		setWidget(props.widgetList)
		setOpen(false)
	}, [props.widgetList])

	return (
		<>
			{widget && (
				<SpeedDial
					ariaLabel='SpeedDial uncontrolled open example'
					sx={{
						position: 'fixed',
						bottom: 20,
						right: 20,
					}}
					icon={<SpeedDialIcon openIcon={<PersonAddIcon />} />}
					onClose={handleClose}
					onOpen={handleOpen}
					open={open}>
					{widget.map((action, index) => (
						<SpeedDialAction
							key={index}
							sx={{ color: '#565dab', fontSize: '20px' }}
							icon={action.icon}
							tooltipTitle={action.title}
							onClick={() => {
								action.action === 'scroll'
									? window.scrollTo(0, 0)
									: history.push(action.action)
							}}
						/>
					))}
				</SpeedDial>
			)}
		</>
	)
}
