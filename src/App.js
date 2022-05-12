import { Component } from 'react';
// import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	/** Runs first
	 *  Used to initialize state
	 */
	constructor() {
		//Always runs first and used to initialize state
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
		console.log('constructor');
	}
	/** Runs third, after render()
	 * First time component is mounted to DOM.
	 */
	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((users) => this.setState(() => ({ monsters: users }))); //executes re-render and calls render() method again
	}

	onSearchChange = (event) => {
		event.preventDefault();
		const searchField = event.target.value.toLowerCase();
		this.setState(() => ({ searchField }));
	};
	/** Runs second, after constructor()
	 * Initial rendering and mounting of component on to DOM.
	 * Gets called every time a render/re-render needs to occur
	 */
	render() {
		console.log('render');
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		return (
			<div className='App'>
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder='search monsters'
				/>
				{filteredMonsters.map((monster, i) => {
					return <h1 key={i}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
