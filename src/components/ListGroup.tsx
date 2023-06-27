const ListGroup = () => {
	const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

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
			`Name of City: ${city}, index of city: ${i}, X location: ${e.clientX}, Y location: ${e.clientY}`
		);
	};

	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <h1>No item found!</h1>}
			<ul className="list-group">
				{items.map((city, i) => (
					<li
						className="list-group-item"
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
