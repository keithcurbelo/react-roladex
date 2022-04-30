import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
	/** Runs first
	 *  Used to initialize state
	 */
	constructor() {
		//Always runs first and used to initialize state
		super();
		this.state = {
			monsters: [],
		};
	}
	/** Runs third, after render()
	 * First time component is mounted to DOM.
	 */
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((users) => this.setState(() => ({ monsters: users }))); //executes re-render and calls render() method again
	}

	/** Runs second, after constructor()
	 * Initial rendering and mounting of component on to DOM.
	 * Gets called every time a render/re-render needs to occur
	 */
	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster, i) => {
					return <h1 key={i}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
