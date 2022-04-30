import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [{ name: 'linda' }, { name: 'Frank' }, { name: 'Jackie' }],
		};
	}
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
