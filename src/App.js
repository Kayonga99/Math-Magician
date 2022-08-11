import React from 'react';
import './App.css';
/* eslint-disable */
  import Calculator from './Components/Calculator'
/* eslint-enable */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
