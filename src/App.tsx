// import Message from './Message';
import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/button';

const App = () => {
	const [alertVisibility, setAlertVisibility] = useState(false);
	const handleClick = () => {
		setAlertVisibility(!alertVisibility);
		// console.log('Clicked!');
	};
	return (
		<>
			{alertVisibility && (
				<Alert onClose={() => setAlertVisibility(false)}>
					My alert!
				</Alert>
			)}
			<div>
				<Button onClick={() => handleClick()}>My Button</Button>
			</div>
		</>
	);
};

export default App;
