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
import Register from './Register.jsx';
import EditRecord from 'components/EditRecord.jsx';

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
					<Route exact path='/register/'>
						<Register/>
					</Route>
					<Route exact path='/list/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='list'/>
							<List/>
						</div>
					</Route>
					<Route exact path='/edit-list/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='list'/>
							<EditList/>
						</div>
					</Route>
					<Route path='/edit-list/:id'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='list'/>
							<EditList/>
						</div>
					</Route>
					<Route exact path='/record/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='record'/>
							<Record/>
						</div>
					</Route>
					<Route exact path='/edit-record/'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='record'/>
							<EditRecord/>
						</div>
					</Route>
					<Route exact path='/edit-record/:recordId'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='record'/>
							<EditRecord/>
						</div>
					</Route>
					<Route exact path='/edit-record/:recordId/:feedbackId'>
						<div style={{display:'flex', flexDirection:'column'}}>
							<NavBar select='record'/>
							<EditRecord/>
						</div>
					</Route>
				</Switch>
			</Router>
		)
	}
}
