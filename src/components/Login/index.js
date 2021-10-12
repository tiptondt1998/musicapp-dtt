import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import LockIcon from '@material-ui/icons/Lock';
import { Link, withRouter } from 'react-router-dom'
import EmailIcon from '@material-ui/icons/Email';
import firebase from '../firebase'
import './index.css'

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
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

function SignIn(props) {
	const { classes } = props
  
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	//if you want to do an isLoggedIn state... just use the setIsLoggedIn like... if(firebase.currentUser) isLoggedIn = true. 

	return (
		<main className={classes.main}>
			<Paper id="paper" className={classes.paper}>
				<Avatar id="avatar" className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
       			</Typography>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email"><EmailIcon className="login_icon"/>Email</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password"><LockIcon className="login_icon" />Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						 id="register_login_buttons"
						onClick={login}
						className={classes.submit}>
						Sign in
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						id="register_login_buttons"
						component={Link}
						to="/signup"
						className={classes.submit}>
						Register
          			</Button>
				</form>
			</Paper>
		</main>
	)

	async function login() {
		try {
			await firebase.login(email, password)
			
			props.history.replace('/dashboard')
			
		
		} catch(error) {
			alert(error.message)
		}
	}

	 
		 
		
		
}

export default withRouter(withStyles(styles)(SignIn))