import Like from './components/Like';

const App = () => {
	return (
		<div>
			<Like onclick={() => console.log('Clicked!')}></Like>
		</div>
	);
};

export default App;
