const Message = () => {
	const name = 'Maximilian';
	if (name) return <h1>Hello {name}</h1>;
	return <h1>There is nothing to show you here!</h1>;
};

export default Message;
