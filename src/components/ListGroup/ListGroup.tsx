import { useState } from 'react';
// import styles from './ListGroup.module.css';
import './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

const ListItem = styled.li`  
	padding: 5px 0;
`;

interface IProps {
	items: string[];
	heading: string;
	onSelectItem: (city: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: IProps) => {
	const [selectedItem, setSelectedItem] = useState(0);

	const handleGroupListItemClick = (i: number) => {
		setSelectedItem(i);
	};

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <h1>No item found!</h1>}
			{/* <ul className={[styles.listGroup, styles.container].join(' ')}> */}
			{/* <ul className="list-group"> */}
			<List>
				{items.map((city: string, i: number) => (
					// <li
					<ListItem
						// className={
						// 	selectedItem === i
						// 		? 'list-group-item active'
						// 		: 'list-group-item'
						// }
						key={i}
						onClick={() => {
							handleGroupListItemClick(i);
							onSelectItem(city);
						}}
					>
						{city}
						{/* </li> */}
					</ListItem>
				))}
			</List>
		</>
	);
};
export default ListGroup;
