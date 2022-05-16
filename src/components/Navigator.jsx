import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { Login } from './Login.jsx';
import { NavBar } from './NavBar.jsx';

export const Navigator = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Login}/>
			<Route exact path='/list' component={NavBar}/>
			{/* <Route component={ErrorNotFoundComponent}/> */}
		</Switch>
	</Router>
);
