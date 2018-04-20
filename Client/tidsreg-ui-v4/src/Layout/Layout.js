import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <table id="HeadTable" className="header" align="Center">
            <tbody>
              <tr>
                <td align="center" style={{width:'30%'}} className="header">
                  <input type="submit" name="Home" value="TidsReg" id="Home" disabled={!this.props.LoggedIn} className="button" style={{fontSize:'XX-Large'}} />
                </td>
              <td align="center" style={{width:'70%'}}>
                
              </td>
              <td style={{width: '10%'}}>
              <input type="submit" name="LogOff" value="Log Off" id="LogOff" className="button" style={ this.props.LoggedIn ? {display: 'inherit'}: {display: 'none'} } /></td>
            </tr>
          </tbody>
          </table>
        </div>
        <div id="errorComponent" className="error"></div>
      </div>);
  }
}

function mapStateToProps(state){
    console.log('mapStateToProps',state);
    return {
        LoggedIn: state.LoggedIn
    }
}

export default connect(mapStateToProps)(Header)

export class Footer extends Component {
  render() {
    return (<div className="footer" align="center">A Time Registration Website</div>);
  }
}
