import React, { Component } from 'react';

import Header,{ Footer } from '../Layout/Layout';

class TimeLogModule extends Component {

	render() {
		return (
			<div>
			<Header/>
			<div align="center">
			<table style={{width: '100%'}}>
			<tbody>
			<tr>
			<td style={{width: '30%'}}>
			<ul className="centerlist">
			<li style={{fontSize: 'x-large'}}>Add New Project</li>
			<li>
			<input name="NewProject" type="text" id="ContentPlaceHolder1_NewProject" className="textbox" style={{fontSize:'Large'}} /><br />
			</li>
			<li>
			<input type="submit" name="AddNewProject" value="Add New Project" id="ContentPlaceHolder1_AddNewProject" className="button" style={{fontSize:'XX-Large'}} />
			</li>
			<li></li>
			<li>
			<input type="submit" name="Route" value="Route" id="Route" className="button" /><br/>
			<input type="submit" name="Statistics" value="Statistics / Invoices" id="Statistics" className="button" /><br/>
			</li>
			</ul>
			</td>
			<td style={{width: '40%'}}>
			<div align="center">
			<input type="submit" name="Backward" value="&lt;" id="Backward" className="button" style={{fontSize:'XX-Large',width:'70px'}} />
			<input type="submit" name="Forward" value=">" id="Forward" className="button" style={{fontSize:'XX-Large',width:'70px'}} />
			</div>
			<div align="center" style={{margin: '30px'}}>
			<div>
			<table className="grid" cellSpacing="4" cellPadding="8" align="Center" id="ContentPlaceHolder1_GridView1">
			<thead>
			<tr>
			<th scope="col">&nbsp;</th><th scope="col">WorkDay</th><th scope="col">Nordea</th><th scope="col">Nets</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			</td>
			</tr>
			</tbody>
			</table>
			</div>
			<Footer />
			</div>);
		}
	}


	export default TimeLogModule;
