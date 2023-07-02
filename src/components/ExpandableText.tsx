import React, { useState } from 'react';

interface IProps {
	children: string;
	maxChars: number;
	// onShort: () => void;
}

// const ExpandableText = ({ maxChars, onShort }: IProps) => {
const ExpandableText = ({ children, maxChars }: IProps) => {
	const [moreButton, setmoreButton] = useState(false);
	const handleShortWords = () => {
		//when OFF/False => display 100 Words
		console.log('Clicked!');
		setmoreButton(!moreButton);
		console.log(moreButton);

		// setmaxChars1({ maxChars1: 1000 });

		//when ON/True => display what the user entered already!
		//const [wordNumber, setWordNumber] = useState('false');
	};

	return (
		<>
			<div>
				{moreButton && children}
				{!moreButton && children.substring(0, maxChars)}
				...
				<button onClick={() => handleShortWords()}>
					{moreButton && <span>Less</span>}
					{!moreButton && <span>More</span>}
				</button>
				{/* <button onClick={() => children.substring(0,10)}>More</button> */}
				{/* <button>More</button> */}
				{/* <div>{children.length}</div> */}
			</div>
		</>
	);
};

export default ExpandableText;
