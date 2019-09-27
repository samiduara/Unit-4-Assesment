import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1
    };
  }

  handleChangeCircle = (circleNumber) => {
    this.setState({selectedCircle: circleNumber});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleChangeCircle={this.handleChangeCircle}
          />
 
        </main>
      </div>
    );
  }
}

export default App;