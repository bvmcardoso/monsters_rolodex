/** @format */
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        console.log(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;

// class App extends Component {
//   // First react runs the constructor (Any language does this)
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // ComponentDidMount runs the first time the component is mounted on the DOM.
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         // When the state is changed, React knows he needs to re render the page
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   constonSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   // render() determines what to show: Mount the initial state of the component and then goes to componentDidMount() function
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
// export default App;
