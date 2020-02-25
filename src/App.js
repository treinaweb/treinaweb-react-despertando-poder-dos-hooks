import React, {Component, useState} from 'react';
import './App.css';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState(state => ({counter: state.counter + 1}));
  }

  render(){
    const {state} = this;
    return(
      <button onClick={this.increment} >Classe: {state.counter}</button>
    )
  }
}

function Counter2(props){
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
