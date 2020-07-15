import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cnt: 0,
    }
    this.increment = function() {
      this.setState(
        {cnt: this.state.cnt+1}
      )
    }
    this.decrement = () => this.setState({cnt: this.state.cnt-1})

  }

  render(){
    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div className="counter">
      Counter: {this.state.cnt}
      </div>
    </div>
  }
}

export default App;
