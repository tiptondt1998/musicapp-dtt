import React, { useEffect, useState } from 'react'
import { Typography, Paper } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import Bio from '../Bio/Bio'
import './index.css';
import ImageUpload from '../ProfileImage/ImageUpload'



const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function Dashboard(props) {
	const { classes } = props

	if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

	const [bio, setBio] = useState('')


	useEffect(() => {
		firebase.getCurrentUserBio().then(setBio)
	})

	return (
		<main className={classes.main}>
		
			<Paper id="paper" className={classes.paper}>
				
					<ImageUpload />
				
				<Typography component="h1" variant="h5">
					 { firebase.getCurrentUsername() }
				</Typography>
				<Typography id="Bio" component="h1" variant="h5">
					 {bio ? `"${bio}"` : <Bio />}
				</Typography>
			
			</Paper>
		</main>
	)

	
}

export default withRouter(withStyles(styles)(Dashboard))