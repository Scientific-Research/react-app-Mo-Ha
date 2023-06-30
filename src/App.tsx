import { useState } from 'react';
import Like from './components/Like';
import Message from './Message';

const App = () => {
	// const [game, setGame] = useState({
	// 	id: 1,
	// 	player: {
	// 		name: 'John',
	// 	},
	// });

	// interface Ipizza {
	// 	name: string;
	// 	toppings: string;
	// }
	// const [pizza, setPizza] = useState({
	// 	name: 'Spicy Pepperoni',
	// 	toppings: ['Mushroom'],
	// });

	// const [cart, setCart] = useState({
	// 	discount: 0.1,
	// 	items: [
	// 		{ id: 1, title: 'Product 1', quantity: 1 },
	// 		{ id: 2, title: 'Product 2', quantity: 1 },
	// 	],
	// });

	// const handleClick = () => {
	// 	// Ex 3 Solution
	// 	setCart({
	// 		...cart,
	// 		items: [
	// 			...cart.items.map((item) =>
	// 				item.id === 1
	// 					? { ...item, quantity: item.quantity + 1 }
	// 					: item
	// 			),
	// 		],
	// 	});
	// 	console.log(cart.items);

	// const [bugs, setBugs] = useState([
	// 	{ id: 1, title: 'Bug 1', fixed: false },
	// 	{ id: 2, title: 'Bug 2', fixed: false },
	// ]);

	const [tags, setTags] = useState(['happy', 'cheerful']);

	const handleClick = () => {
		// Updating Arrays --> Add

		// setTags({ ...tags, ...['Lovely'] });
		// setTags(tags.push(['Lovely']));
		// tags.push('Lovely');
		// Add
		setTags([...tags, 'exciting']);

		// Remove
		setTags(tags.filter((item) => item !== 'happy'));
		//  console.log(tags);

		//Update
		setTags(tags.map((item) => (item === 'happy' ? 'happiness' : item)));
		console.log(tags);

		// Solution for Updating Array of Objects => meine Lösung
		// setBugs({
		// 	// ...bugs,
		// 	...[{ id: 1, title: 'Bug 1', fixed: true }],
		// });
		// console.log(bugs);
		// Solution for Updating Array of Objects => Mosh Hamedani Lösung
		// setBugs(
		// 	bugs.map((item) =>
		// 		item.id === 1 ? { ...item, fixed: true } : item
		// 	)
		// );
		// console.log(bugs);
		// Ex 3 Solution
		// setCart({
		// 	...cart,
		// 	items: cart.items.map((item) =>
		// 		item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
		// 	),
		// });
		// console.log(cart.items);
		// // SOLUTION_2
		// setPizza({
		// 	...pizza,
		// 	toppings: [...pizza.toppings, 'Cheese', 'Salami'],
		// });
		// console.log(pizza.toppings);
		// // SOLUTION_2
		// const newName = (game.player.name = 'Bob');
		// const newName = game.player.name;
		// setGame({game.player.name = 'Bob'});
		// setGame([game.player.name]='Bob');
		// setGame({ ...game, player: { name: 'Bob' } });
		// setGame({ ...game, player: { ...game.player, name: 'Bob' } });
		// console.log(game.player.name);
		// pizza.toppings.push('Cheese');
		// // Solution_1
		// const Topping: any = ['Cheese'];
		// Topping.forEach((element: any) => {
		// 	pizza.toppings.push(element);
		// });
		// // setPizza({ ...pizza, toppings: ['Cheese'] });
		// setPizza({ ...pizza });
		// console.log(pizza.toppings);
		// // Solution_1
	};

	return (
		<div>
			{/* <Like onclick={() => console.log('Clicked!')}></Like> */}
			<button onClick={() => handleClick()}>My Button</button>
			{/* <Message /> */}
		</div>
	);
};

export default App;
