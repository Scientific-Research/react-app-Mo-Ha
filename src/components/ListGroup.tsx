import { useState } from 'react';

interface IProps {
	items: string[];
	heading: string;
	onSelectItem: (city: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: IProps) => {
	const [selectedItem, setSelectedItem] = useState(-1);

	const handleGroupListItemClick = (i: number) => {
		setSelectedItem(i);
	};

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <h1>No item found!</h1>}
			<ul className="list-group">
				{items.map((city: string, i: number) => (
					<li
						className={
							selectedItem === i
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={i}
						onClick={() => {
							handleGroupListItemClick(i);
							onSelectItem(city);
						}}
					>
						{city}
					</li>
				))}
			</ul>
		</>
	);
};
export default ListGroup;
