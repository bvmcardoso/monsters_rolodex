/** @format */

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // First react runs the constructor (Any language does this)
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // ComponentDidMount runs the first time the component is mounted on the DOM.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        // When the state is changed, React knows he needs to re render the page
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        );
      });
  }

  // render() determines what to show: Mount the initial state of the component and then goes to componentDidMount() function

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();

            this.setState(() => {
              return {
                searchField,
              };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
