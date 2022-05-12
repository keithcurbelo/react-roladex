import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { items } = this.props;
		return (
			<div className='card-list'>
				{items.map((item, i) => {
					return <Card key={i} {...item} />;
				})}
			</div>
		);
	}
}

export default CardList;
