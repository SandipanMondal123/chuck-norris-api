import './App.css';
import React, { Component } from 'react';

 

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(norris => this.setState({
        value: norris.value
      }))

  }
  refresh = () =>{
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(norris => this.setState({
        value: norris.value
      }))
  }
  render() {
    return (
      <div className='tc'>
        <h1 className='f1'> Chuck Norris Jokes and Facts</h1>
        <div className='tc bg-pink dib br3 pa3 ma2 grow bw2 shadow-5' style = {{background: "#f4f1de", color: "#e07a5f"}}>
          <div className = "joke" >
            
              <h2>{this.state.value}</h2>   
          </div>
        </div>
        <div>
          <button onClick = {this.refresh} className = ' joke br3 pa2 ma2 grow bw1 shadow-3' type = "button" style = {{background: "#22333b", color: "white"}}> Refresh</button>
        </div>
      </div>
      
    );
  }

}
export default App;