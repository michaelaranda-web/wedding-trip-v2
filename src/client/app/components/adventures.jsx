import React from 'react';

export class Adventures extends React.Component {
 
  render() {
    return (
      <div className="adventures-page col-xs-12">
        <div className="header-section">
          <div className="title">
            Our <span className="floating-heads"></span> Adventures!
          </div>
        </div>

        <div className="adventure-icons-section">
          <div className="col-xs-12 col-md-4 icon">
            <div className="icon-image japan"></div>
            <div className="icon-title">JAPAN</div>
          </div>

          <div className="col-xs-12 col-md-4 icon">
            <div className="icon-image taiwan"></div>
            <div className="icon-title">TAIWAN</div>
          </div>

          <div className="col-xs-12 col-md-4 icon">
            <div className="icon-image hawaii"></div>
            <div className="icon-title">HAWAII</div>
          </div>
        </div>
      </div>
    );
  }
}