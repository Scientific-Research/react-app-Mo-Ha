import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Like = () => {
	const [changeColor, setChangeColor] = useState(false);

	const handleChangeColor = () => {
		setChangeColor(!changeColor);
		console.log('clicked!');
	};

	if (changeColor) {
		return (
			<AiFillHeart
				color="#ff6b81"
				size={40}
				onClick={() => handleChangeColor()}
			/>
		);
	} else {
		return <AiOutlineHeart size={40} onClick={() => handleChangeColor()} />;
	}
};

export default Like;
