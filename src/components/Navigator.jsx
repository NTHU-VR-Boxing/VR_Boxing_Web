import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { Login } from './Login.jsx';

export const Navigator = () => (
	<Router>
		<Switch>
			<Route exact path='/login' component={Login}/>
			{/* <Route exact path='/' component={Main}/> */}
			{/* <Route component={ErrorNotFoundComponent}/> */}
		</Switch>
	</Router>
);
