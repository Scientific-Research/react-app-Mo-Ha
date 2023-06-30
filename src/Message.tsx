let count = 0;
const Message = () => {
	// const name = 'Maximilian';
	// if (name) return <h1>Hello {name}</h1>;
	// return <h1>There is nothing to show you here!</h1>;
	count++;
	console.log(count);

	return <div>Message {count}</div>;
	// return count;
};

export default Message;
