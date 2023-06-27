import { useState } from 'react';

interface IProps {
	items: string[];
	heading: string;
}

const ListGroup = ({ items, heading }: IProps) => {
	// let selectedItem = 0;

	// const arr = useState(-1); -1: means nothing was selected!
	// arr[0]; variable (selectedIndex)
	// arr[1]; updater function

	// Oder Destructuring
	const [selectedItem, setSelectedItem] = useState(-1);

	// an example for name as state variable
	// const [name, setName] = useState('');
	//const items: [] = []; // ein leeres Array

	// if (items.length === 0) {
	// 	return (
	// 		<>
	// 			<h1>List</h1>
	// 			<h1>No item found!</h1>;
	// 		</>
	// 	);
	// }

	const handleGroupListItemClick = (
		city: string,
		i: number,
		e: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => {
		// console.log(city, i, e.clientX, e.clientY);
		console.log(
			`Name of City: ${city}, index of city: ${i}, X location: ${e.clientX}, Y location: ${e.clientY}, Selected Number: ${selectedItem}`
		);
		// selectedItem1++;
		// setSelectedItem(selectedItem1);
		// selectedItem1 = i;
		setSelectedItem(i);
		console.log(selectedItem, i);
	};

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <h1>No item found!</h1>}
			<ul className="list-group">
				{items.map((city: string, i: number) => (
					<li
						// className="list-group-item"
						className={
							selectedItem === i
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={i}
						onClick={(e) => handleGroupListItemClick(city, i, e)}
					>
						{city}
					</li>
				))}
			</ul>
		</>
	);
};
export default ListGroup;
