// import Message from './Message';
import ListGroup from './components/ListGroup';

const App = () => {
	const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
	return (
		<p>
			{/* <Message /> */}
			<ListGroup items={items} heading="Cities" />
			{/* <ListGroup /> */}
		</p>
	);
};

export default App;
