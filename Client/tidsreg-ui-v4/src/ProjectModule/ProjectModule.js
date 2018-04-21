import React, { Component } from 'react';

import Header, {  Footer } from '../Layout/Layout';

class ProjectModule extends Component {

	render() {
		return (
			<div>
			<Header/>
			<div align="center">
			<table style={{width: '100%'}}>
			<tr>
			<td style={{width: '30%'}}>
			<div>
			<select name="ProjectDropDown" id="ProjectDropDown" className="button">
			<option selected="selected" value="Nordea">Nordea</option>
			<option value="Nets">Nets</option>

			</select>

			<div style={{margin: '20px'}}>
			calender
			</div>
			</div>
			</td>

			<td style={{width: '70%'}} align="right">
			<div align="center"> Chart Show
			</div>
			</td>
			</tr>
			<tr>
			<td style={{width: '30%', alignContent: 'center'}}>
			<div>
			<input type="submit" name="CreateGrid" value="Go" id="CreateGrid" className="button" style={{width:'100px'}} />
			</div>
			</td>

			<td style={{width: '70%', margin: '50px'}} align="right">
			<div>

			<input type="submit" name="UpdateChart" value="Go" id="UpdateChart" className="button" style={{width:'100px'}} />
			<input type="submit" name="Export" value="Export" id="Export" className="button" />
			</div>
			</td>
			</tr>
			</table>
			</div>

			<Footer />			
			</div>
			);
		}
	}


	export default ProjectModule;
