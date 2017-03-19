import React from 'react';

export class Home extends React.Component {
 
  render() {
    return (
      <div className="home-page">
        <div className="bride-and-groom col-sm-4" />
        <div className="home-content col-sm-8">
        	<h1>Martina and Michael's Wedding Trip 2017</h1>
        	<h3></h3>
        </div>
        <div className="bottom-section col-sm-12">
          <div className="welcome-message"></div>
        </div>
      </div>
    );
  }
}