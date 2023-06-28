// import Message from './Message';
import { useState } from 'react';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/button';
import button from './components/button';

const App = () => {
	// const [selectedColor, setSelectedColor] = useState('secondary');
	const handleClick = () => {
		// const children = 'Hallo';
		console.log('Clicked!');
		// <button color="danger"></button>;
		// <button Color="success" />;
		// setSelectedColor(color);
		// color = 'primary';
		// onClick = { hallo };
		// <p>Hallo</p>;
		// console.log('Hallo');
		// return text = 'Hallo World';
		// <Alert text="Hallo World!" />
		// children = 'hallo';
	};

	// const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

	// const handleSelectItem = (city: string) => {
	// 	console.log(city);
	// };
	return (
		<>
			<Alert>
				Hallo <b> World! </b>
			</Alert>

			{/* <Alert text="Hallo World!" /> */}
			<div>
				{/* <button
					// onClick={() => handleClick()}
					type="button"
					className="btn btn-primary"
				> 
					Primary
				</button> */}

				{/* <Button text="Hello World" /> */}
				{/* <button onClick={() => (text = 'Hallo World')}>Hallo</button> */}
				<Button Color="danger" onClick={() => handleClick()}>
					{/* <b>Hallo</b> */}
					My Button
				</Button>
			</div>
		</>
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
