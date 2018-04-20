import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import LoginModule from './LoginModule/LoginModule';
import TimeLogModule from './TimeLogModule/TimeLogModule';
import ProjectModule from './ProjectModule/ProjectModule'
import registerServiceWorker from './registerServiceWorker';
import Store from './Store/Store';

class main extends Component{
	constructor(props){
	super(props)
	this.state = {
		empNr: '',
		auth: '',
		LoggedIn: false,
		projectList: []
	}
}
	render(){return (<div></div>)};
}

export default main;

ReactDOM.render(
	<Provider store={Store}>
	<BrowserRouter>
	<div>	
		<Route exact path= '/'  component= {LoginModule} />
		<Route exact path= '/Login'  component= {LoginModule} />
		<Route exact path= '/TimeLog'  component= {TimeLogModule} />
		<Route exact path= '/ProjectOverview'  component= {ProjectModule} />	
    </div>
	</BrowserRouter>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
