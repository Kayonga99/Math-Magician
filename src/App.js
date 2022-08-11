import React from 'react';
import './App.css';
import Calculator from './Components/calculator';
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
