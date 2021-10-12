import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import Login from '../Login'
import Register from '../Register'
import Dashboard from '../Dashboard'
import Instrumentals from '../Instrumentals/Instrumentals'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'
import Card from '../Card/Card'

import './styles.css'
import AccountDetails from '../AccountDetails/AccountDetails'



const theme = createMuiTheme()

export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})


	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Register} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/instrumentals" component={Instrumentals} />
					<Route exact path="/accountdetails" component={AccountDetails} />
					<Route exact path="/Card" component={Card}/>
				</Switch>
			</Router>
		</MuiThemeProvider>
	) :<div className="dude"> <div className="loader" size="huge"><CircularProgress id="load"/></div></div>
}