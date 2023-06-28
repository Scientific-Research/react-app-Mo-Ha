// import Message from './Message';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

const App = () => {
	// const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

	// const handleSelectItem = (city: string) => {
	// 	console.log(city);
	// };
	return (
		<div>
			{/* <Alert text="Hallo World!" /> */}
			<Alert>
				Hallo <b> World! </b>
			</Alert>
		</div>
		// <p>
		// 	{/* <Message /> */}
		// 	<ListGroup
		// 		items={items}
		// 		heading="Cities"
		// 		onSelectItem={handleSelectItem}
		// 	/>
		// 	{/* <ListGroup /> */}
		// </p>
	);
};

export default App;
