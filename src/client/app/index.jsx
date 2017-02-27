import React from 'react';
import {render} from 'react-dom';

require('./stylesheets/index.scss');

class App extends React.Component {
  render () {
    return <p> Hey React!</p>;
  }
}

render(<App/>, document.getElementById('app'));