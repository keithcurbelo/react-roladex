import { Component } from 'react';

class CardList extends Component {
	render() {
		const { items } = this.props;
		return (
			<div>
				{items.map((item, i) => (
					<h1 key={i}>{item.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
