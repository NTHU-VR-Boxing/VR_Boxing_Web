import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Login from 'components/Login.jsx';
import NavBar from 'components/NavBar.jsx';
import List from 'components/List.jsx';
import EditList from 'components/EditList.jsx';
import Record from './Record.jsx';

export default class Navigator extends React.Component {
	constructor(props) {
	  super(props);
  
	}

	render(){
		return(
			<Router>
				<Switch>
					<Route exact path='/'>
						<Login/>
					</Route>
					<Route exact path='/list/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar/>
							<List/>
						</div>
					</Route>
					<Route exact path='/edit-list/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar/>
							<EditList/>
						</div>
					</Route>
					<Route exact path='/record/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar/>
							<Record/>
						</div>
					</Route>
				</Switch>
			</Router>
		)
	}
}
