import { useState } from 'react';
import Like from './components/Like';
import Message from './Message';
import produce from 'immer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

const App = () => {
	// const [cartItems, setCartItems] = useState(['Producrt1', 'Product2']);

	const [drink, setDrink] = useState({
		title: 'Americano',
		price: 5,
	});
	// Sharing State between Components
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
	// const [tags, setTags] = useState(['happy', 'cheerful']);

	// Simplifying update using immer
	// const [bugs, setBugs] = useState([
	// 	{ id: 1, title: 'Bug 1', fixed: false },
	// 	{ id: 2, title: 'Bug 2', fixed: false },
	// ]);

	// // Updating Nested Objects:
	// const [customer, setCustomer] = useState({
	// 	name: 'John',
	// 	address: {
	// 		city: 'San Francisco',
	// 		zipCode: 94111,
	// 	},
	// });

	const handleClick = () => {
		// drink.price = 70;
		// setDrink({ ...drink });

		//ODER nur in one line:
		setDrink({ ...drink, price: 60 });

		//ODER => the meaning of spread operator => ... - Start
		// const newDrink = {
		// 	title: drink.title,
		// 	price: 6,
		// };
		// setDrink(newDrink);
		//ODER => the meaning of spread operator => ... - End

		// console.log(drink);
		// <p>{drink.price}</p>;
		// Updating Nested Objects - Start
		// setGame({ ...game, player: { ...game.player, name: 'Bob' } });
		// setCustomer({
		// 	...customer,
		// 	address: { ...customer.address, zipCode: 12345 },
		// });
		// console.log(customer);
		// // Updating Nested Objects - End
		// setBugs(
		// 	bugs.map((item) =>
		// 		item.id === 1 ? { ...item, fixed: true } : item
		// 	)
		// );
		// Solution with immer: // Simplifying update using immer
		// setBugs(
		// 	produce((draft) => {
		// 		const bug = draft.find((bug) => bug.id === 1);
		// 		if (bug !== undefined) bug.fixed = true;
		// 	})
		// );
		// console.log(bugs);
		// Updating Arrays --> Add
		// setTags({ ...tags, ...['Lovely'] });
		// setTags(tags.push(['Lovely']));
		// tags.push('Lovely');
		// Add
		// setTags([...tags, 'exciting']);
		// Remove
		// setTags(tags.filter((item) => item !== 'happy'));
		//  console.log(tags);
		//Update
		// setTags(tags.map((item) => (item === 'happy' ? 'happiness' : item)));
		// console.log(tags);
		// Solution for Updating Array of Objects => meine Lösung
		// setBugs({
		// 	// ...bugs,
		// 	...[{ id: 1, title: 'Bug 1', fixed: true }],
		// });
		// console.log(bugs);
		// Solution for Updating Array of Objects => Mosh Hamedani Lösung
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

	// const handleClearItems = () => {
	// 	setCartItems([]);
	// };

	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
			<p>{drink.price}</p>
			{/* <NavBar cartItemsCount={cartItems.length}></NavBar> */}
			{/* <Cart cartItems={cartItems} onClear={handleClearItems}></Cart> */}

			{/* <Like onclick={() => console.log('Clicked!')}></Like> */}
			{/* // Simplifying update using immer */}
			{/* {bugs.map((bug) => (
				<p key={bug.id}>
				{bug.title}
				{bug.fixed ? ' Fixed' : ' New'}
				</p>
			))} */}

			{/* // Updating Nested Objects: */}
			{/* <p>{customer.address.zipCode}</p> */}
			{/* // Updating Nested Objects: */}

			{/* <button onClick={() => handleClick()}>My Button</button> */}
			{/* <Message /> */}
		</div>
	);
};

export default App;
