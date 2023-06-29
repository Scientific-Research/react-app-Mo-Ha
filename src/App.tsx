// import Message from './Message';
import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/button';
import ListGroup from './components/ListGroup/ListGroup';
// import './components/ListGroup/ListGroup.module.css';
// import './components/ListGroup/ListGroup.css';
// import './App.css';
import { BsFillCalendarFill } from 'react-icons/bs';
import Button from './components/Button/button';
import styles from './button.module.css';

const App = () => {
	// const items = ['New York', 'Los Angeles', 'San Francisco'];
	// const [alertVisibility, setAlertVisibility] = useState(false);
	// const handleClick = () => {
	// 	setAlertVisibility(!alertVisibility);
	// 	// console.log('Clicked!');
	// };
	return (
		<div>
			{/* <ListGroup
				heading="Miami"
				items={items}
				onSelectItem={() => onclick}
			></ListGroup> */}
			{/* <BsFillCalendarFill color="red" size="40" /> */}
			<Button onClick={() => {}}>My Button</Button>
		</div>
		// <>
		// 	{alertVisibility && (
		// 		<Alert onClose={() => setAlertVisibility(false)}>
		// 			My alert!
		// 		</Alert>
		// 	)}
		// 	<div>
		// 		<Button onClick={() => handleClick()}>My Button</Button>
		// 	</div>
		// </>
	);
};

export default App;
