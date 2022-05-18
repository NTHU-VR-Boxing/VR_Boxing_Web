import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Login from 'components/Login.jsx';
import NavBar from 'components/NavBar.jsx';

export const Navigator = () => (
	<Router>
		<Switch>
			<Route exact path='/'>
				<Login/>
			</Route>
			<Route exact path='/list'>
				<NavBar/>
			</Route>
			<Route exact path='/record'>
				<NavBar/>
			</Route>
		</Switch>
	</Router>
);
