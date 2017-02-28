import React from 'react';
import { Link } from 'react-router';

export class Header extends React.Component {
	render() {
	  return (
	  	<div id="site-header">
	  		<div className="site-title col-xs-4"><Link to={`/`}>M+M 2017</Link></div>
	  		<div className="header-links col-xs-4">
	  			<ul>
	  				<li className="col-xs-3">Hawaii</li>
	  				<li className="col-xs-3"><Link to={`/japan/`}>Japan</Link></li>
	  				<li className="col-xs-3">Tokyo</li>
	  				<li className="col-xs-3">California</li>
	  			</ul>
	  		</div>
	  	</div>
	  )		
  }		
};