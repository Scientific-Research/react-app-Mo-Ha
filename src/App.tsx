import { useState } from 'react';
import Like from './components/Like';

const App = () => {
	// const [game, setGame] = useState({
	// 	id: 1,
	// 	player: {
	// 		name: 'John',
	// 	},
	// });

	interface Ipizza {
		name: string;
		toppings: string;
	}
	const [pizza, setPizza] = useState({
		name: 'Spicy Pepperoni',
		toppings: ['Mushroom'],
	});

	const handleClick = () => {
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

		// SOLUTION_2
		setPizza({
			...pizza,
			toppings: [...pizza.toppings, 'Cheese', 'Salami'],
		});
		console.log(pizza.toppings);
		// SOLUTION_2
	};

	return (
		<div>
			<Like onclick={() => console.log('Clicked!')}></Like>
			<button onClick={() => handleClick()}>My Button</button>
		</div>
	);
};

export default App;
