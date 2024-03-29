import React, { Component } from 'react';
import './App.css';

const textAreaStyles = {
  width:235,
  margin: 5

};

 class App extends Component {
    constructor (props) {
      super(props);
      this.state= {
        userInput: "",
        toDoList : []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit =this.handleChange.bind(this);
    }

    handleSubmit() {
      const itemsArray =this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value

      });
    }

      render() {
        const items = this.state.toDoList.map(element => {
          return <li>{element}</li>
        });
        return (
          <div>
            <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Seperate Items With Commas"  />
            <br />
            <button onClick={this.handleSubmit}>Create List</button>
            <h1>My "To Do" List</h1>
            <ul>
              {items}
              </ul>
              </div>
        );
        }
      };

export default App;


