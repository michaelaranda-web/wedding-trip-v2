import React from 'react';
import { Link } from 'react-router';

export class Header extends React.Component {
	render() {
	  return (
	  	<div id="site-header">
	  		<div className="site-title col-sm-8"><Link to={`/`}>MARTINA AND MICHAEL'S WEDDING TRIP</Link></div>
	  		<div className="header-links col-sm-4">
	  			<ul>
	  				<li className="col-sm-3">Hawaii</li>
	  				<li className="col-sm-3"><Link to={`/japan/`}>Japan</Link></li>
	  				<li className="col-sm-3">Tokyo</li>
	  				<li className="col-sm-3">California</li>
	  			</ul>
	  		</div>
	  	</div>
	  )		
  }		
};