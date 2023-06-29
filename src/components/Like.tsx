import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface IProps {
	onclick: () => void;
}

const Like = ({ onclick }: IProps) => {
	const [changeColor, setChangeColor] = useState(false);

	const handleChangeColor = () => {
		setChangeColor(!changeColor);
		//Console.log("Clicked!");
		//ODER with Props => onclick();
		onclick();
	};

	if (changeColor) {
		return (
			<AiFillHeart
				color="#ff6b81"
				size={40}
				onClick={handleChangeColor}
			/>
		);
	} else {
		return <AiOutlineHeart size={40} onClick={handleChangeColor} />;
	}
};

export default Like;
