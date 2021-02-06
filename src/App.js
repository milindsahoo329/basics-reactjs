import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name : "Virat Kohli", age:32},
      {name : "Steve Smith", age:31}
    ],
    showPersons: false
  }   

  toggleHandler = (newName) => {
    console.log("Was clicked!!");
    this.setState({
      persons: [
        {name : newName, age:32},
        {name : "Steve Smith", age:31}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    });
  }

  onChangeHandler = (event) => {
    console.log("Was clicked!!");
    this.setState({
      persons: [
        {name : "Virat Kohli", age:32},
        {name : event.target.value, age:31}
      ]
    });
  }

  render() {
    return (
      <div className="App">        
        <h1 className="App-title">Welcome to React !!!</h1>
        <button onClick={this.togglePersonsHandler}>Toogggleee</button>
        { this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={() => this.toggleHandler('Viiirrrrat')}
            >India</Person>
            <br />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.toggleHandler.bind(this,"Viraaaaat")}
              changed={this.onChangeHandler}
            >Australia</Person>
          </div>  : null
        }
        
      </div>
    );
  }
}

export default App;
