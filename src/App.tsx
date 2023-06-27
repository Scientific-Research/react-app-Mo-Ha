// import Message from './Message';
import ListGroup from './components/ListGroup';

const App = () => {
	const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

	const handleSelectItem = (city: string) => {
		console.log(city);
	};
	return (
		<p>
			{/* <Message /> */}
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			/>
			{/* <ListGroup /> */}
		</p>
	);
};

export default App;
