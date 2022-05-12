import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { items } = this.props;
		return (
			<div className='card-list'>
				{items.map((item, i) => {
					const { id, name, email } = item;
					return (
						<div className='card-container' key={id}>
							<img src={`https://robohash.org/${id}?set=set4`} alt={name} />
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
