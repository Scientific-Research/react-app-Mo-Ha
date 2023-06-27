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

	const handleGroupListItem = (city: any) => {
		console.log(city);
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
						onClick={() => handleGroupListItem(city)}
					>
						{city}
					</li>
				))}
			</ul>
		</>
	);
};
export default ListGroup;
