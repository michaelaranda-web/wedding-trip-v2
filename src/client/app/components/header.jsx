import React from 'react';
import { Link } from 'react-router';
import HeaderDropdownMenu from './headerDropdownMenu.jsx';

export class Header extends React.Component {
	render() {
	  return (
	  	<div id="site-header">
	  		<div className="site-title col-xs-4"><Link to={`/`}>M+M 2017</Link></div>
	  		<div className="header-links">
					<HeaderDropdownMenu title="Our Adventures" />
	  		</div>
	  	</div>
	  );
  }		
}