/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			my_array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
		};
	}

	// ComponentDidMount runs the first time the component is mounted on the DOM.
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
							<p>{monster.email}</p>
							<br />
						</div>
					);
				})}
				{this.state.my_array.map((item) => console.log(item * 12))}
			</div>
		);
	}
}
export default App;
