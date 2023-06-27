const ListGroup = () => {
	// const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
	const items: [] = []; // ein leeres Array

	if (items.length === 0) {
		return <h1>No item found!</h1>;
	}
	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				{items.map((city, i) => (
					<li className="list-group-item" key={i}>
						{city}
					</li>
				))}
			</ul>
		</>
	);
};
export default ListGroup;
